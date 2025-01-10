import React from "react";
import { useLocation } from "react-router-dom"; // 전달받은 state를 가져오기 위한 훅
import styles from "./SignUp4.module.css";

const SignUp4: React.FC = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string }; // 전달받은 닉네임

  return (
    <div className="h-screen flex flex-col items-center bg-primary font-pretendard px-6">
      {/* Circular Progress (PNG 삽입) */}
      <div className={styles.circularProgress}>
        <img
          src="/Ellipse14.png"
          alt="Circular Progress"
          className="w-28 h-28" // 크기를 조정
        />
      </div>

      {/* Title */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {nickname}님을 위한 식단을<br />추천하는 중입니다
        </h1>
      </div>

      {/* Status Indicators */}
      <div className={styles.statusContainer}>
        <div className={styles.statusItem}>
          <div className={styles.statusCircleBlue}></div>
          <p className={styles.statusText}>중량을 위한 효율적인 방법 계산 중</p>
        </div>
        <div className={styles.statusItem}>
          <div className={styles.statusCircleIndigo}></div>
          <p className={styles.statusText}>하루 목표 칼로리 계산 중</p>
        </div>
        <div className={styles.statusItem}>
          <div className={styles.statusCircleGray}></div>
          <p className={styles.statusText}>건강을 위한 영양 지표 도출 중</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp4;
