import React from "react";
import { useNavigate } from "react-router-dom";

import recordIcon from "../assets/Note.svg";
import groupIcon from "../assets/Vector.svg";
import homeIcon from "../assets/Home.svg";
import dietIcon from "../assets/List.svg";
import infoIcon from "../assets/Info.svg";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full max-w-[393px] bg-[#F5F5F5] justify-center rounded-t-[30px] shadow-md">
      <div className="flex justify-around items-center py-3">
        {/* 내 기록 */}
        <button onClick={() => navigate('/record')} className="font-[Pretendard] flex flex-col items-center">
          <img src={recordIcon} alt="Record Icon" className="w-[17px] h-[17px] mb-1" />
          <div className="text-black text-sm">내 기록</div>
        </button>

        {/* 그룹 */}
        <button onClick={() => navigate('/group')} className="font-[Pretendard] flex flex-col items-center">
          <img src={groupIcon} alt="Group Icon" className="w-[21px] h-[18px] mb-1" />
          <div className="text-black text-sm">그룹</div>
        </button>

        {/* 홈 */}
        <button onClick={() => navigate('/home')} className="font-[Pretendard] flex flex-col items-center">
          <img src={homeIcon} alt="Home Icon" className="w-[16px] h-[18px] mb-1" />
          <div className="text-black text-sm">홈</div>
        </button>

        {/* 식단 */}
        <button onClick={() => navigate('/diet')} className="font-[Pretendard] flex flex-col items-center">
          <img src={dietIcon} alt="Diet Icon" className="w-[16px] h-[18px] mb-1" />
          <div className="text-black text-sm">식단</div>
        </button>

        {/* 내 정보 */}
        <button onClick={() => navigate('/mypage')} className="font-[Pretendard] flex flex-col items-center">
          <img src={infoIcon} alt="Info Icon" className="w-[7px] h-[13px] mb-1" />
          <div className="text-black text-sm">내 정보</div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
