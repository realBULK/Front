import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import ProgressBar from "../../src/components/ProgressBar";
import styles from "./SignUp1.module.css"; // 스타일 파일 import

const SignUp1: React.FC = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 훅

  const handleGenderSelect = (gender: string) => {
    console.log(`Selected Gender: ${gender}`);
    navigate("/signup2"); // SignUp2 페이지로 이동
  };

  return (
    <div className="h-screen flex flex-col items-center bg-primary font-pretendard px-6">
      {/* Progress Bar */}
      <div className={styles.progressBarContainer}>
        <ProgressBar progress={20} />
      </div>

      {/* Title */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          성별을{"\n"}선택해 주세요.
        </h1>
        <p className={styles.subtitle}>
          성별에 따라 몸에 필요한 에너지가 달라져요!
        </p>
      </div>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => handleGenderSelect("남자")}
        >
          남자
        </button>
        <button
          className={styles.button}
          onClick={() => handleGenderSelect("여자")}
        >
          여자
        </button>
      </div>
    </div>
  );
};

export default SignUp1;
