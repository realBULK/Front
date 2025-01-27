import React from "react";

interface CharacterAreaProps {
  background: string;
  characterImage: string;
  bulkfood: string;
  buttonPosition: { x: number; y: number };
  isFed: boolean;
  handleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => void;
}

const CharacterArea: React.FC<CharacterAreaProps> = ({
  background,
  characterImage,
  bulkfood,
  buttonPosition,
  isFed,
  handleMouseDown,
  handleTouchStart,
}) => {
  return (
    <div className="relative w-full h-[370px]">
      {/* 배경 이미지 */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 캐릭터 이미지 */}
      <img
        src={characterImage}
        alt="Character"
        className="absolute top-1/2 left-1/2 w-[127px] h-[154px] transform -translate-x-[120px] -translate-y-[50px]"
      />

      {/* 음식 버튼 */}
      {isFed && (
        <button
          className="absolute w-[50px] h-[48px] rounded-[15px] shadow-custom inset-shadow-custom filter"
          style={{
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            position: "absolute",
            backgroundImage: `url(${bulkfood})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        ></button>
      )}
    </div>
  );
};

export default CharacterArea;
