import React, { useState, useEffect } from "react";

interface CharacterAreaProps {
  background: string;
  characterImage: string;
  bulkfood: string;
  buttonPosition: { x: number; y: number };
  isFed: boolean;
  handleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => void;
  // handleFeed: () => void;
}

// const CharacterArea: React.FC<CharacterAreaProps> = ({
//   background,
//   characterImage,
//   bulkfood,
//   buttonPosition,
//   isFed,
//   handleMouseDown,
//   handleTouchStart,
// }) => {

//   const [buttonLeftPosition, setButtonLeftPosition] = useState(buttonPosition.x);

//   // 화면 크기 변경 감지
//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth <= 325) {
//         setButtonLeftPosition(214); // 325px 이하
//       } else if (screenWidth < 361) {
//         setButtonLeftPosition(235); // 325px 초과 ~ 361px 미만
//       } else {
//         setButtonLeftPosition(buttonPosition.x); // 기본 위치
//       }
//     };

//     handleResize(); // 초기값 설정
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [buttonPosition.x]);


//   return (
//     <div className="relative w-full h-[370px]">
//       {/* 배경 이미지 */}
//       <img
//         src={background}
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px]"
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
//           className="absolute w-[64px] h-[58px] rounded-[15px] shadow-custom inset-shadow-custom filter"
//           style={{
//             left: `${buttonLeftPosition}px`,
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

const CharacterArea: React.FC<CharacterAreaProps> = ({
  background,
  characterImage,
  bulkfood,
  buttonPosition,
  isFed,
  handleMouseDown,
  handleTouchStart
  // handleFeed,
}) => {
  const [buttonLeftPosition, setButtonLeftPosition] = useState(buttonPosition.x);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 325) {
        setButtonLeftPosition(214); // 325px 이하
      } else if (screenWidth < 361) {
        setButtonLeftPosition(235); // 325px 초과 ~ 361px 미만
      } else {
        setButtonLeftPosition(buttonPosition.x); // 기본 위치
      }
    };

    handleResize(); // 초기값 설정
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [buttonPosition.x]);

  return (
    <div className="relative w-full min-h-[52vh] max-h-[80vh] mt-2 mb-8 flex items-center justify-center">
      {/* 배경 이미지 */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-[91%] object-cover rounded-[20px]"
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
          className="absolute w-[64px] h-[58px] rounded-[15px] shadow-custom inset-shadow-custom filter"
          style={{
            left: `${buttonLeftPosition}px`,
            top: `${buttonPosition.y}px`,
            position: "absolute",
            backgroundImage: `url(${bulkfood})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          // onClick={handleFeed}
        ></button>
      )}
    </div>
  );
};

export default CharacterArea;
