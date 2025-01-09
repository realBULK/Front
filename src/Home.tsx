import logo from "../public/character.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center h-screen p-[33px]">
            {/* 상단 레벨 표시 */}
            <div className="w-full flex flex-col">
                <h1
                className="text-[40px] font-[Gmarket Sans] font-bold text-black leading-[1.21] mb-4 text-left"
                >
                LV.12
                </h1>
                <h2 className="text-[32px] font-[Pretendard] font-semibold text-black mb-2 text-left">
                칼로리
                </h2>

                {/* 칼로리 바 */}
                <div className="w-full max-w-[327px] items-center mb-[30px]">
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

            {/* 로고 */}
            <img src={logo} alt="Bulk Logo" className="w-[200px] h-[270px] mt-[40px]" />

            {/* "벌크 먹어주기" 버튼 */}
            <button className="w-[100px] h-[48px] text-[14px] font-[Pretendard] fixed bottom-[60px] right-[200px] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter"
            style={{
                boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
            }}>
            벌크 먹어주기
            </button>

            {/* 하단 네비게이션 */}
            <div className="w-[393px] bg-[#EDEFFE] justify-center mt-[10%] rounded-t-lg">
                <div className="flex justify-around items-center py-4">
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

export default Home;
