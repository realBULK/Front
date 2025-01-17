import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/MainProgressBar";

import character from "/character.png";
import character_eat from "/BULK_EAT.png";
import recordIcon from "/Note.png";
import groupIcon from "/Vector.png";
import homeIcon from "/Home.png";
import dietIcon from "/List.png";
import infoIcon from "/Info.png";
import background from "/background.svg";

const Main = () => {
  const navigate = useNavigate();
  
  // 상태 관리
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number }>({ x: 245, y: 280 }); // 버튼 초기 위치
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [characterImage, setCharacterImage] = useState<string>(() => {
    const isFedStored = localStorage.getItem("isFed");
    return isFedStored === "true" ? character : character_eat;
  });
  const [isFed, setIsFed] = useState<boolean>(() => {
    return localStorage.getItem("isFed") === "true";
  });

  useEffect(() => {
    // 먹이 상태 변경 시 로컬 스토리지에 저장
    localStorage.setItem("isFed", isFed.toString());
  }, [isFed]);

  useEffect(() => {
    // 타이머 복구 로직
    const timerEndTime = localStorage.getItem("timerEndTime");
    if (timerEndTime) {
      const timeLeft = parseInt(timerEndTime, 10) - Date.now();
      if (timeLeft > 0) {
        // 남은 시간이 있으면 타이머 설정
        setTimeout(() => {
          setCharacterImage(character);
          setIsFed(true);
          localStorage.setItem("isFed", "true");
          localStorage.removeItem("timerEndTime"); // 타이머 종료 후 정리
        }, timeLeft);
      } else {
        // 시간이 지났으면 바로 상태 복구
        setCharacterImage(character);
        setIsFed(true);
        localStorage.setItem("isFed", "true");
        localStorage.removeItem("timerEndTime");
      }
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      setButtonPosition({ x: newX, y: newY });

      // 버튼이 캐릭터 입 주변에 도달했는지 확인
      if (newX >= 50 && newX <= 200 && newY >= 50 && newY <= 120) {
        setCharacterImage(character_eat); // 이미지를 먹는 상태로 변경
        setIsFed(false); // 먹이 먹은 상태 설정
        setIsDragging(false); // 드래그 중지
        setButtonPosition({ x: 245, y: 280 }); // 버튼 초기 위치로 이동

        // 타이머 종료 시간을 로컬 스토리지에 저장
        const timerEndTime = Date.now() + 10000;
        localStorage.setItem("timerEndTime", timerEndTime.toString());

        // 10초 후에 원래 상태로 복구
        setTimeout(() => {
          setCharacterImage(character); // 원래 이미지로 복구
          setIsFed(true); // 먹이 상태 해제
          localStorage.setItem("isFed", "true");
          localStorage.removeItem("timerEndTime"); // 타이머 종료 후 정리
        }, 10000);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - buttonPosition.x, // 마우스 클릭 위치와 버튼 왼쪽 경계의 차이
      y: e.clientY - buttonPosition.y, // 마우스 클릭 위치와 버튼 위쪽 경계의 차이
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex flex-col items-center h-screen p-[15px]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* 상단 레벨 표시 */}
            {/* 상단 레벨 표시 */}
      <div className="w-full flex flex-col mb-6">
        <div className="flex items-center">
          <div className="relative w-10 h-10 mr-3">
            <svg className="absolute top-0 left-0 w-[90%] h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                className="text-orange-500"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray="75, 100"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <h1 className="text-[40px] font-[GmarketSansWeight] text-black leading-[1.21]">
            LV.12
          </h1>
        </div>

        {/* 칼로리 카드 */}
        <div className="w-[100%] bg-[#F4E3DC] rounded-[20px] p-4 shadow-md mx-auto mt-[11px]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[24px] font-[Pretendard] font-semibold text-black">칼로리</h2>
            <div className="flex space-x-2">
              <button className="w-3 h-3 bg-[#FF9163] rounded-full"></button>
              <button className="w-3 h-3 bg-[#9A7EB1] rounded-full"></button>
              <button className="w-3 h-3 bg-[#B1CAC8] rounded-full"></button>
              <button className="w-3 h-3 bg-[#83B2E8] rounded-full"></button>
              <button className="w-3 h-3 bg-[#FFF292] rounded-full"></button>
            </div>
          </div>

          {/* 칼로리 바 */}
          <ProgressBar progress={89} color="#FF9163" />
          <div className="font-[Pretendard] flex justify-between mt-1 text-sm text-#000">
            <span></span>
            <span>
              <span>1,345</span>
              <span className="text-[#8D8D8D]">/1,500kcal</span>
            </span>
          </div>

          {/* 탄, 단, 지 */}
          <div className="w-full mt-2">
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">탄수화물</span>
                <ProgressBar progress={100} color="#FF9163" />
                <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">350g</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">단백질</span>
                <ProgressBar progress={50} color="#FF9163" />
                <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">200g</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">지방</span>
                <ProgressBar progress={30} color="#FF9163" />
                <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">100g</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* character */}
      <div className="relative w-full h-[370px]">
        {/* 배경 이미지 */}
        <img src={background} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        
        {/* 캐릭터 이미지 */}
        <img
          src={characterImage}
          alt="Character"
          className="absolute top-1/2 left-1/2 w-[200px] h-[270px] transform -translate-x-1/2 -translate-y-1/2"
        />
        {isFed && (
          <button
            className="absolute w-[100px] h-[48px] text-[14px] font-[Pretendard] font-semibold text-[#191919] rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter"
            style={{
              left: `${buttonPosition.x}px`,
              top: `${buttonPosition.y}px`,
              position: "absolute",
              boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`
            }}
            onMouseDown={handleMouseDown}
          >
            벌크 먹어주기
          </button>
        )}
      </div>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 w-full max-w-[393px] bg-[#F5F5F5] justify-center rounded-t-[30px] shadow-md">
      <div
        className="flex justify-around items-center py-3"
      >
        {/* 내 기록 */}
        <button onClick={() => navigate('/record')} className="font-[Pretendard] flex flex-col items-center">
          <img src={recordIcon} alt="Record Icon" className="w-[17px] h-[17px] mb-1" />
          <div className="text-black text-sm">
            내 기록
          </div>
        </button>

        {/* 그룹 */}
        <button onClick={() => navigate('/group')} className="font-[Pretendard] flex flex-col items-center">
          <img src={groupIcon} alt="Group Icon" className="w-[21px] h-[18px] mb-1" />
          <div className="text-black text-sm">
            그룹
          </div>
        </button>

        {/* 홈 */}
        <button onClick={() => navigate('/home')} className="font-[Pretendard] flex flex-col items-center">
          <img src={homeIcon} alt="Home Icon" className="w-[16px] h-[18px] mb-1" />
          <div className="text-black text-sm">
            홈
          </div>
        </button>

        {/* 식단 */}
        <button onClick={() => navigate('/diet')} className="font-[Pretendard] flex flex-col items-center">
          <img src={dietIcon} alt="Diet Icon" className="w-[16px] h-[18px] mb-1" />
          <div className="text-black text-sm">
            식단
          </div>
        </button>

        {/* 내 정보 */}
        <button onClick={() => navigate('/mypage')} className="font-[Pretendard] flex flex-col items-center">
          <img src={infoIcon} alt="Info Icon" className="w-[7px] h-[13px] mb-1" />
          <div className="text-black text-sm">
            내 정보
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Main;
