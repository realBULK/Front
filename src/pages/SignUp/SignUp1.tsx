import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useCheckNickname } from '@/hooks/useCheckNickname';

const SignUp1: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(() => localStorage.getItem('nickname') || '');
  const [error, setError] = useState<string | null>(null);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const nicknameSchema = yup.string().required('닉네임을 입력해주세요.').max(10, '닉네임은 10자 이내로 설정해주세요.');
  
  const { data, isLoading, refetch } = useCheckNickname(nickname);

  useEffect(() => {
    if (!data || isLoading) return;
    if (data.isSuccess && data.data.duplicated) {
      setError('중복된 닉네임입니다.');
      setIsNicknameValid(false);
    } else {
      setError(null);
      setIsNicknameValid(true);
    }
  }, [data, isLoading]);

  const handleNicknameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setNickname(value);
    localStorage.setItem('nickname', value);

    setError(null);
    setIsNicknameValid(true);

    try {
      await nicknameSchema.validate(value);
      if (value) refetch(); // 닉네임 중복 확인 요청
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
        setIsNicknameValid(false);
      }
    }
  };

  const handleNext = async () => {
    try {
      await nicknameSchema.validate(nickname);
      if (!isNicknameValid || error || isLoading) return;
      localStorage.setItem('nickname', nickname);
      navigate('/signup2', { state: { nickname } });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-[#F5F5F5] font-pretendard px-6">
      <div className="text-center mt-20 w-full max-w-md mx-auto">
        <h1 className="text-[40px] font-bold font-[GmarketSansWeight] text-black ml-4 text-left whitespace-pre-line">
          닉네임을{'\n'}알려 주세요.
        </h1>
        <p className="font-semibold font-pretendard mt-8 ml-4 text-left text-[16px]">
          한 번 설정한 닉네임은 추후에 변경 가능해요!
        </p>
      </div>

      <div className="w-[327px] mx-auto mt-4">
        <input
          type="text"
          id="nickname-input"
          placeholder="예: 홍길동"
          className={`w-[327px] h-[55px] font-pretendard bg-[#EDEDEDCC] border-[#FFFFFF] border 
            shadow-whiteBox rounded-base px-4 text-[14px] outline-none 
            placeholder-[#BDBDBD] ${error ? 'text-[#F81919]' : 'text-gray-800'}
            hover:bg-[#DED1E8CC] hover:border-[#DED1E8]
            active:bg-[#EDEDEDCC] active:border-[#FFFFFF]"`}
          value={nickname}
          onChange={handleNicknameChange}
        />
        {error && (
          <p className="mt-2 text-[#F81919] text-right text-[10px] font-pretendard font-medium leading-[10px] tracking-[-0.2px]">
            {error}
          </p>
        )}
      </div>

      <div className="w-[327px] max-w-md mx-auto mt-auto mb-10">
        <button
          className="w-[327px] h-[57px] font-pretendard bg-[#D1D1D1] 
            shadow-whiteBox rounded-base font-semibold text-[14px] text-[#191919] outline-none
            hover:bg-[#B8ADC0] active:bg-[#9B88A8]"
          onClick={handleNext}
          disabled={!nickname.trim() || !!error || isLoading || !isNicknameValid}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SignUp1;