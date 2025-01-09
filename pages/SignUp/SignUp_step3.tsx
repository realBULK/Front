import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import ProgressBar from "../../src/components/ProgressBar";
import styles from "./SignUp2.module.css"; // 스타일 파일 import

const SignUp3: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(""); // 닉네임 상태 관리

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value); // 입력값 업데이트
  };

  const handleNicknameSubmit = () => {
    console.log(`Entered Nickname: ${nickname}`);
    navigate("/signup4"); // SignUp4 페이지로 이동
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNicknameSubmit(); // 엔터 키 입력 시 다음 페이지로 이동
    }
  };

  const handleBlur = () => {
    if (nickname) {
      handleNicknameSubmit(); // 입력 필드에서 포커스가 벗어나면 이동
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-primary font-pretendard px-6">
      {/* Progress Bar */}
      <div className={styles.progressBarContainer}>
        <ProgressBar progress={100} />
      </div>

      {/* Title */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>닉네임을{"\n"}알려주세요.</h1>
        <p className={styles.subtitle}>한 번 설정한 닉네임은 추후에 변경 가능해요!</p>
      </div>

      {/* Input Section */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="nickname-input"
          placeholder="예: 홍길동"
          className={styles.input}
          value={nickname}
          onChange={handleNicknameChange} // 입력값 업데이트
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
          onBlur={handleBlur} // 포커스 아웃 이벤트 처리
        />
      </div>
    </div>
  );
};

export default SignUp3;
