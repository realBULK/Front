import { useNavigate } from 'react-router-dom'

import recordIcon from '../assets/Note.svg'
import groupIcon from '../assets/Vector.svg'
import homeIcon from '../assets/Home.svg'
import dietIcon from '../assets/List.svg'
import infoIcon from '../assets/Info.svg'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 w-full max-w-[460px] bg-[#F5F5F5] justify-center rounded-t-[30px] shadow-md border-t border-gray-300">
      <div className="flex justify-around items-center py-3">
        {/* 내 기록 */}
        <button onClick={() => navigate('/record')} className="font-[GmarketSansMedium] flex flex-col items-center">
          <img src={recordIcon} alt="Record Icon" className="w-[17px] h-[17px] mb-1" />
          <div className="text-black text-[10px] mt-[8px]">내 기록</div>
        </button>

        {/* 그룹 */}
        <button onClick={() => navigate('/group')} className="font-[GmarketSansMedium] flex flex-col items-center">
          <img src={groupIcon} alt="Group Icon" className="w-[21px] h-[18px] mb-1" />
          <div className="text-black text-[10px] mt-[8px]">그룹</div>
        </button>

        {/* 홈 */}
        <button onClick={() => navigate('/home')} className="font-[GmarketSansMedium] flex flex-col items-center">
          <img src={homeIcon} alt="Home Icon" className="w-[16px] h-[18px] mb-1" />
          <div className="text-black text-[10px] mt-[8px]">홈</div>
        </button>

        {/* 식단 */}
        <button onClick={() => navigate('/diet')} className="font-[GmarketSansMedium] flex flex-col items-center">

          <img src={dietIcon} alt="Diet Icon" className="w-[16px] h-[18px] mb-1" />
          <div className="text-black text-[10px] mt-[8px]">식단</div>
        </button>

        {/* 내 정보 */}
        <button onClick={() => navigate('/mypage')} className="font-[GmarketSansMedium] flex flex-col items-center">
          <img src={infoIcon} alt="Info Icon" className="w-[7px] h-[13px] mb-1" />
          <div className="text-black text-[10px] mt-[12px]">내 정보</div>
        </button>
      </div>
    </div>
  )
}

export default NavBar
