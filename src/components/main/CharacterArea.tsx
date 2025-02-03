// import React from "react";

// interface CharacterAreaProps {
//   background: string;
//   characterImage: string;
//   bulkfood: string;
//   buttonPosition: { x: number; y: number };
//   isFed: boolean;
//   handleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   handleTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => void;
// }

// const CharacterArea: React.FC<CharacterAreaProps> = ({
//   background,
//   characterImage,
//   bulkfood,
//   buttonPosition,
//   isFed,
//   handleMouseDown,
//   handleTouchStart,
// }) => {
//   return (
//     <div className="relative w-full h-[370px]">
//       {/* 배경 이미지 */}
//       <img
//         src={background}
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       {/* 캐릭터 이미지 */}
//       <img
//         src={characterImage}
//         alt="Character"
//         className="absolute top-1/2 left-1/2 w-[127px] h-[154px] transform -translate-x-[120px] -translate-y-[50px]"
//       />

//       {/* 음식 버튼 */}
//       {isFed && (
//         <button
//           className="absolute w-[50px] h-[48px] rounded-[15px] shadow-custom inset-shadow-custom filter"
//           style={{
//             left: `${buttonPosition.x}px`,
//             top: `${buttonPosition.y}px`,
//             position: "absolute",
//             backgroundImage: `url(${bulkfood})`,
//             backgroundSize: "100% 100%",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//           onMouseDown={handleMouseDown}
//           onTouchStart={handleTouchStart}
//         ></button>
//       )}
//     </div>
//   );
// };

// export default CharacterArea;


import React, { useState, useEffect } from "react";

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

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // 화면 크기 변경 감지
  useEffect(() => {
    const updateHeight = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // 배경 높이를 화면 높이에 따라 조정 (최소 50%, 최대 70%)
  const backgroundHeight = Math.min(Math.max(screenHeight * 0.55, 370), screenHeight * 0.7);
  console.log(backgroundHeight)

  return (
    <div className="relative w-full h-[370px] sm:h-[450px] md:h-[500px] lg:h-[550px] style={{ height: backgroundHeight }}">
      {/* 배경 이미지 */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px] style={{ height: backgroundHeight }}"
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
          className="absolute rounded-[15px] shadow-custom inset-shadow-custom filter"
          style={{
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            width: `calc(8% + 30px)`, 
            height: `calc(8% + 28px)`, 
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