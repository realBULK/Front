import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

import character from "../../assets/character.svg";
import character_eat from "../../assets/BULK_EAT.svg";
import background from "../../assets/background.svg";
import bulkfood from "../../assets/BulkFood.svg";
import CalorieCard from "../../components/main/CalorieCard";
import CharacterArea from "../../components/main/CharacterArea";

const Main = () => {
  const colors = {
    orange: { bar: "#FF9163", background: "#F4E3DC" },
    purple: { bar: "#9A7EB1", background: "#DED1E8" },
    teal: { bar: "#82DED7", background: "#B1CAC8" },
    blue: { bar: "#83B2E8", background: "#BBD5F3" },
    yellow: { bar: "#BBDB50", background: "#FFFAD4" },
  };

  const getInitialColor = () => {
    const storedColor = localStorage.getItem("selectedColor");
    return storedColor ? JSON.parse(storedColor) : colors.orange;
  };

  const [selectedColor, setSelectedColor] = useState(getInitialColor);
  const [buttonPosition, setButtonPosition] = useState({ x: 275, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [characterImage, setCharacterImage] = useState(character);
  const [isFed, setIsFed] = useState(() => {
    const storedValue = localStorage.getItem("isFed");
    if (storedValue === null) {
      localStorage.setItem("isFed", "true"); // 기본값 설정
      return true;
    }
    return storedValue === "true";
  });
  const [timer, setTimer] = useState<number | null>(null);

  // 터치 이동 방지
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventScroll, { passive: false });
    return () => document.removeEventListener("touchmove", preventScroll);
  }, []);

  useEffect(() => {
    const timerEndTime = localStorage.getItem("timerEndTime");
    if (timerEndTime) {
      const remainingTime = parseInt(timerEndTime, 10) - Date.now();
      if (remainingTime > 0) {
        setCharacterImage(character_eat);
        setIsFed(false);
        setTimer(setTimeout(() => resetCharacterState(), remainingTime));
      } else {
        resetCharacterState();
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isFed", isFed.toString());
  }, [isFed]);

  // 드래그 시작 (데스크톱)
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    startDragging(e.clientX, e.clientY);
  };

  // 드래그 시작 (모바일)
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];
    startDragging(touch.clientX, touch.clientY);
  };

  const startDragging = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setOffset({
      x: clientX - buttonPosition.x,
      y: clientY - buttonPosition.y,
    });
  };

  // 드래그 이동 (데스크톱)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      moveButton(e.clientX, e.clientY);
    }
  };

  // 드래그 이동 (모바일)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const touch = e.touches[0];
      moveButton(touch.clientX, touch.clientY);
    }
  };

  const moveButton = (clientX: number, clientY: number) => {
    const newX = clientX - offset.x;
    const newY = clientY - offset.y;

    setButtonPosition({ x: newX, y: newY });

    // 캐릭터에 음식 도달 시 상태 변경
    if (newX >= 80 && newX <= 120 && newY >= 145 && newY <= 170) {
      setCharacterImage(character_eat);
      setIsFed(false);
      setIsDragging(false);
      setButtonPosition({ x: 275, y: 40 });

      const timerEndTime = Date.now() + 10000; // 10초 타이머
      console.log(timer);
      localStorage.setItem("timerEndTime", timerEndTime.toString());

      setTimer(
        setTimeout(() => {
          resetCharacterState();
        }, 10000)
      );
    }
  };

  // 드래그 종료 (데스크톱 + 모바일 공통)
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchEnd = () => setIsDragging(false);

  const resetCharacterState = () => {
    setCharacterImage(character);
    setIsFed(true);
    localStorage.setItem("isFed", "true");
    localStorage.removeItem("timerEndTime");
  };

  const handleColorChange = (color: { bar: string; background: string }) => {
    setSelectedColor(color);
    localStorage.setItem("selectedColor", JSON.stringify(color));
  };

  return (
    <div
      className="flex flex-col items-center h-screen p-[15px]"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      {/* 상단 레벨 표시 */}
      <div className="w-full flex flex-col mb-4">
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
                strokeWidth="4"
              ></path>
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={selectedColor.bar} // 진행 색상 변경
                strokeDasharray="75, 100"
                strokeWidth="4"
              ></path>
            </svg>
          </div>
          <h1 className="text-[40px] font-[GmarketSansWeight] text-black leading-[1.21]">
            LV.12
          </h1>
        </div>

        {/* 칼로리 카드 */}
        <CalorieCard selectedColor={selectedColor} colors={colors} onColorChange={handleColorChange} />
      </div>

      {/* 캐릭터 영역 */}
      <CharacterArea
        background={background}
        characterImage={characterImage}
        bulkfood={bulkfood}
        buttonPosition={buttonPosition}
        isFed={isFed}
        handleMouseDown={handleMouseDown}
        handleTouchStart={handleTouchStart}
      />

      {/* 하단 네비게이션 */}
      <NavBar />
      
    </div>
  );
};

export default Main;