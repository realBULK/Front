import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import API from "../../apis/axiosInstance";

const MyPage = () => {

  const isFirstRender = useRef(true);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<{ nickname: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          if (isFirstRender.current) {
            alert("로그인 후 사용할 수 있습니다.");
            navigate("/login"); // 로그인 페이지로 이동
          }
          setIsLoading(false);
          return;
        }
  
        setIsLoggedIn(true);
  
        const response = await API.get("/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (response.data && response.data.isSuccess) {
          setUser({
            nickname: response.data.data.nickname,
            email: response.data.data.email,
          });
        }
      } catch (error) {
        console.error("프로필 정보 불러오기 오류:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (isFirstRender.current) {
      fetchData();
      isFirstRender.current = false; // 첫 실행 이후 false로 변경
    }
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-50 font-[Pretendard]">
        {/* 프로필 섹션 */}
        <div className="mt-12 w-[90%] max-w-md bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
          {isLoading ? (
            <p className="text-gray-500 text-lg font-medium">사용자 정보 불러오는 중...</p>
          ) : (
            <>
              {/* 프로필 사진 */}
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-2xl font-bold">
                  {user?.nickname.charAt(0).toUpperCase() || "?"}
                </span>
              </div>
              
              {/* 사용자 정보 */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900">{user?.nickname || "사용자"}</h2>
                <p className="text-gray-500 text-sm">Email | {user?.email || "이메일 없음"}</p>
              </div>
            </>
          )}
        </div>

        {/* 추가 설정 옵션 */}
        <div className="mt-6 w-[90%] max-w-md bg-white shadow-md rounded-2xl p-6 space-y-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full py-3 text-black font-medium rounded-lg border border-[#585858] bg-white/80 hover:bg-[#BDBDBD]"
            >
              로그아웃
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full py-3 text-black font-medium rounded-lg border border-[#585858] bg-white/80 hover:bg-[#BDBDBD]"
            >
              로그인
            </button>
          )}
        </div>
      </div>

      <NavBar />
    </>
  );
};

export default MyPage;
