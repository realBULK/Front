// import character from "/character.png";
// import { useNavigate } from 'react-router-dom';

// const Main = () => {

//     const navigate = useNavigate();

//     return (
//         <div className="flex flex-col items-center h-screen p-[33px]">
//             {/* 상단 레벨 표시 */}
//             <div className="w-full flex flex-col">
//                 <h5
//                     className="text-[14px] font-[Pretendard] text-black leading-[1.21] text-left"
//                     >
//                     0kal
//                 </h5>
//                 <h1
//                 className="text-[40px] font-[GmarketSansWeight] text-black leading-[1.21] mb-4 text-left"
//                 >
//                 LV.12
//                 </h1>
//                 <h2 className="text-[32px] font-[Pretendard] font-semibold text-black mb-1 text-left">
//                 칼로리
//                 </h2>

//                 {/* 칼로리 바 */}
//                 <div className="w-full max-w-[327px] items-center mb-[15px]">
//                 <div className="relative h-4 bg-gray-300 rounded-full">
//                     <div
//                     className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
//                     style={{ width: "89%" }}
//                     ></div>
//                 </div>
//                 <div className="font-[Pretendard] flex justify-between mt-1 text-sm text-#000">
//                     <span>0kcal</span>
//                     <span>1,500kcal</span>
//                 </div>
//                 </div>
//             </div>

//             {/* 탄단지 바 */}
//             <div className="w-full">
//                 <div className="flex justify-between">
//                 {/* 탄 */}
//                 <div className="flex flex-col items-start">
//                     <span className="font-[Pretendard] text-lg font-semibold mb-1">탄</span>
//                     <div className="relative w-[90px] h-4 bg-gray-300 rounded-full">
//                     <div
//                         className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
//                         style={{ width: "100%" }}
//                     ></div>
//                     </div>
//                     <span className="font-[Pretendard] mt-1 text-sm text-gray-600 ml-[61px]">***g</span>
//                 </div>

//                 {/* 단 */}
//                 <div className="flex flex-col items-start">
//                     <span className="font-[Pretendard] text-lg font-semibold mb-1">단</span>
//                     <div className="relative w-[90px] h-4 bg-gray-300 rounded-full">
//                     <div
//                         className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
//                         style={{ width: "50%" }}
//                     ></div>
//                     </div>
//                     <span className="font-[Pretendard] mt-1 text-sm text-gray-600 ml-[61px]">***g</span>
//                 </div>

//                 {/* 지 */}
//                 <div className="flex flex-col items-start">
//                     <span className="font-[Pretendard] text-lg font-semibold mb-1">지</span>
//                     <div className="relative w-[90px] h-4 bg-gray-300 rounded-full">
//                     <div
//                         className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
//                         style={{ width: "30%" }}
//                     ></div>
//                     </div>
//                     <span className="font-[Pretendard] mt-1 text-sm text-gray-600 ml-[61px]">***g</span>
//                 </div>
//                 </div>
//             </div>

//             {/* character */}
//             <div className="relative w-full max-w-[327px] top-7 bottom-1">
//                 <img src={character} alt="Bulk Logo" className="w-[200px] h-[270px] mx-auto" />
//                 <button
//                 className="absolute -right-5 w-[100px] h-[48px] text-[14px] font-[Pretendard] font-semibold text-[#191919] rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter mb-[100px]"
//                 style={{
//                     boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
//                 }}
//                 >
//                 벌크 먹어주기
//                 </button>
//             </div>

//             {/* 하단 네비게이션 */}
//             <div className="fixed bottom-5 w-[393px] bg-[#EDEFFE] justify-center mt-[10%] rounded-t-lg">
//                 <div className="flex justify-around items-center">
//                     <div className="font-[Pretendard] flex flex-col items-center">
//                         <button onClick={() => navigate('/record')} className="text-black text-sm">내 기록</button>
//                     </div>
//                     <div className="font-[Pretendard] flex flex-col items-center">
//                         <button onClick={() => navigate('/group')} className="text-black text-sm">그룹</button>
//                     </div>
//                     <div className="font-[Pretendard] flex flex-col items-center">
//                         <button onClick={() => navigate('/home')} className="text-black text-sm">홈</button>
//                     </div>
//                     <div className="font-[Pretendard] flex flex-col items-center">
//                         <button onClick={() => navigate('/diet')} className="text-black text-sm">식단</button>
//                     </div>
//                     <div className="font-[Pretendard] flex flex-col items-center">
//                         <button onClick={() => navigate('/mypage')} className="text-black text-sm">내 정보</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
//     };

// export default Main;


import React, { useState } from "react";
import character from "/character.png";
import character_eat from "/BULK_EAT.png";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {

    const navigate = useNavigate();

    // 상태 관리
    const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number }>({ x: 150, y: 400 }); // 버튼 초기 위치
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [characterImage, setCharacterImage] = useState<string>(character); // 캐릭터 이미지 상태

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            const newX = e.clientX - offset.x;
            const newY = e.clientY - offset.y;

            setButtonPosition({ x: newX, y: newY });

            // 버튼이 캐릭터 입 주변에 도달했는지 확인
            if (newX >= 120 && newX <= 230 && newY >= 300 && newY <= 400) {
                setCharacterImage(character_eat); // 이미지를 먹는 상태로 변경
                setIsDragging(false); // 드래그 중지
                setButtonPosition({ x: 150, y: 400 }); // 버튼 초기 위치로 이동
            }
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsDragging(true);
        const buttonRect = e.currentTarget.getBoundingClientRect(); // 버튼의 현재 위치
        setOffset({
            x: e.clientX - 50, // 마우스 클릭 위치와 버튼 왼쪽 경계의 차이
            y: e.clientY - 24, // 마우스 클릭 위치와 버튼 위쪽 경계의 차이
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="flex flex-col items-center h-screen p-[33px]"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {/* 상단 레벨 표시 */}
            <div className="w-full flex flex-col">
                <h5
                    className="text-[14px] font-[Pretendard] text-black leading-[1.21] text-left"
                    >
                    0kal
                </h5>
                <h1
                className="text-[40px] font-[GmarketSansWeight] text-black leading-[1.21] mb-4 text-left"
                >
                LV.12
                </h1>
                <h2 className="text-[32px] font-[Pretendard] font-semibold text-black mb-1 text-left">
                칼로리
                </h2>

                {/* 칼로리 바 */}
                <div className="w-full max-w-[327px] items-center mb-[15px]">
                <div className="relative h-4 bg-gray-300 rounded-full">
                    <div
                    className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
                    style={{ width: "89%" }}
                    ></div>
                </div>
                <div className="font-[Pretendard] flex justify-between mt-1 text-sm text-#000">
                    <span>0kcal</span>
                    <span>1,500kcal</span>
                </div>
                </div>
            </div>

            {/* 탄단지 바 */}
            <div className="w-full">
                <div className="flex justify-between">
                {/* 탄 */}
                <div className="flex flex-col items-start">
                    <span className="font-[Pretendard] text-lg font-semibold mb-1">탄</span>
                    <div className="relative w-[90px] h-4 bg-gray-300 rounded-full">
                    <div
                        className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
                        style={{ width: "100%" }}
                    ></div>
                    </div>
                    <span className="font-[Pretendard] mt-1 text-sm text-gray-600 ml-[61px]">***g</span>
                </div>

                {/* 단 */}
                <div className="flex flex-col items-start">
                    <span className="font-[Pretendard] text-lg font-semibold mb-1">단</span>
                    <div className="relative w-[90px] h-4 bg-gray-300 rounded-full">
                    <div
                        className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
                        style={{ width: "50%" }}
                    ></div>
                    </div>
                    <span className="font-[Pretendard] mt-1 text-sm text-gray-600 ml-[61px]">***g</span>
                </div>

                {/* 지 */}
                <div className="flex flex-col items-start">
                    <span className="font-[Pretendard] text-lg font-semibold mb-1">지</span>
                    <div className="relative w-[90px] h-4 bg-gray-300 rounded-full">
                    <div
                        className="absolute h-4 bg-gradient-to-r from-[#445AFF] to-[#9AA6FF] rounded-full"
                        style={{ width: "30%" }}
                    ></div>
                    </div>
                    <span className="font-[Pretendard] mt-1 text-sm text-gray-600 ml-[61px]">***g</span>
                </div>
                </div>
            </div>

            {/* character */}
            <div className="relative w-full max-w-[327px] top-7 bottom-1">
                <img src={characterImage} alt="Character" className="w-[200px] h-[270px] mx-auto" />
                <button
                    className="absolute w-[100px] h-[48px] text-[14px] font-[Pretendard] font-semibold text-[#191919] rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter"
                    style={{
                        left: `${buttonPosition.x}px`,
                        top: `${buttonPosition.y}px`,
                        position: "absolute",
                        boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
                    }}
                    onMouseDown={handleMouseDown}
                >
                    벌크 먹어주기
                </button>
            </div>

            {/* 하단 네비게이션 */}
            <div className="fixed bottom-5 w-[393px] bg-[#EDEFFE] justify-center mt-[10%] rounded-t-lg">
                <div className="flex justify-around items-center">
                    <div className="font-[Pretendard] flex flex-col items-center">
                        <button onClick={() => navigate('/record')} className="text-black text-sm">내 기록</button>
                    </div>
                    <div className="font-[Pretendard] flex flex-col items-center">
                        <button onClick={() => navigate('/group')} className="text-black text-sm">그룹</button>
                    </div>
                    <div className="font-[Pretendard] flex flex-col items-center">
                        <button onClick={() => navigate('/home')} className="text-black text-sm">홈</button>
                    </div>
                    <div className="font-[Pretendard] flex flex-col items-center">
                        <button onClick={() => navigate('/diet')} className="text-black text-sm">식단</button>
                    </div>
                    <div className="font-[Pretendard] flex flex-col items-center">
                        <button onClick={() => navigate('/mypage')} className="text-black text-sm">내 정보</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;





