import React, { useState, useEffect } from "react";
import ProgressBar from "../../components/MainProgressBar";
import NavBar from "../../components/NavBar";

import character from "../../assets/character.svg";
import character_eat from "../../assets/BULK_EAT.svg";
import background from "../../assets/background.svg";
import bulkfood from "../../assets/BulkFood.svg";

const Main = () => {

  // 초기 색상 로드 (로컬 스토리지에 저장된 색상 사용)
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
  const [isFed, setIsFed] = useState(() => localStorage.getItem("isFed") === "true");
  const [timer, setTimer] = useState<number | null>(null);

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

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - buttonPosition.x,
      y: e.clientY - buttonPosition.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      setButtonPosition({ x: newX, y: newY });

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
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault(); // 기본 드래그 동작 방지
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
      onMouseUp={handleMouseUp}
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
        <div
          className="w-[100%] rounded-[20px] p-4 shadow-md mx-auto mt-[11px]"
          style={{ backgroundColor: selectedColor.background }}
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[24px] font-[Pretendard] font-semibold text-black">칼로리</h2>
            
            {/* 색상 버튼 */}
            <div className="flex space-x-2 mb-5">
              {Object.entries(colors).map(([key, color]) => (
                <button
                  key={key}
                  onClick={() => handleColorChange(color)}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color.bar }}
                ></button>
              ))}
            </div>
          </div>

          {/* 칼로리 진행바 */}
          <ProgressBar progress={89} color={selectedColor.bar} />
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
                <ProgressBar progress={100} color={selectedColor.bar} />
                <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">350g</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">단백질</span>
                <ProgressBar progress={50} color={selectedColor.bar} />
                <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">200g</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">지방</span>
                <ProgressBar progress={30} color={selectedColor.bar} />
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
        className="absolute top-1/2 left-1/2 w-[127px] h-[154px] transform -translate-x-[120px] -translate-y-[50px]"
      />
      {isFed && (
          <img
            src={bulkfood}
            alt="Food"
            className="absolute w-[50px] h-[48px] cursor-pointer"
            style={{
              left: `${buttonPosition.x}px`,
              top: `${buttonPosition.y}px`,
              transform: isDragging ? "scale(1.1)" : "scale(1)",
              transition: isDragging ? "none" : "transform 0.2s ease",
            }}
            onMouseDown={handleMouseDown}
            onDragStart={handleDragStart}
          />
      )}
    </div>

      {/* 하단 네비게이션 */}
      <NavBar />
    </div>
  );
};

export default Main;

