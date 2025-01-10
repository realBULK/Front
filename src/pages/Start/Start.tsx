import logo from '/BULK.png'; 
import { useNavigate } from 'react-router-dom';

const Start = () => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[307.44px] h-[176.16] mb-8"
                />

                <button
                    className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter mb-3"
                    style={{
                        boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
                    }}
                    onClick={() => navigate('/questions')}>
                    시작하기
                </button>

                <button
                    className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter"
                    style={{
                        boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
                    }}
                    onClick={() => navigate('/login')}>
                    로그인하기
                </button>

            </div>
        </div>
    );
};

export default Start;
