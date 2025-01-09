import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import ProgressBar from "../../src/components/ProgressBar";
import styles from "./SignUp2.module.css"; // 스타일 파일 import

const SignUp2: React.FC = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(""); // 나이 상태 관리

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value); // 입력값 업데이트
  };

  const handleAgeSubmit = () => {
    console.log(`Entered Age: ${age}`);
    navigate("/signup3"); // SignUp3 페이지로 이동
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAgeSubmit(); // 엔터 키 입력 시 다음 페이지로 이동
    }
  };

  const handleBlur = () => {
    if (age) {
      handleAgeSubmit(); // 입력 필드에서 포커스가 벗어나면 이동
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-primary font-pretendard px-6">
      {/* Progress Bar */}
      <div className={styles.progressBarContainer}>
        <ProgressBar progress={50} />
      </div>

      {/* Title */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>출생 연도를{"\n"}입력해 주세요.</h1>
        <p className={styles.subtitle}>나이에 따라 하루 에너지가 달라져요!</p>
      </div>

      {/* Input Section */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="age-input"
          placeholder="예: 2001년"
          className={styles.input}
          value={age}
          onChange={handleAgeChange} // 입력값 업데이트
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
          onBlur={handleBlur} // 포커스 아웃 이벤트 처리
        />
      </div>
    </div>
  );
};

export default SignUp2;
