import { useEffect } from "react";

const useUserInfo = (members: any[]) => {
  const myUserId = Number(localStorage.getItem("userId"));
  const myNickname = localStorage.getItem("nickname") || "알 수 없음";

  useEffect(() => {
    console.log("🔍 현재 로그인한 사용자 정보:", { myUserId, myNickname });
    console.log("👥 팀원 데이터:", members);

    const myMember = members.find((user) => user.userId === myUserId);
    if (myMember) {
      console.log("✅ 팀원 데이터에서 찾은 내 닉네임:", myMember.nickname);
      if (myMember.nickname !== myNickname) {
        console.warn("❌ 닉네임 불일치! 로컬스토리지와 API 데이터가 다릅니다.");
      }
    } else {
      //console.warn("❌ 현재 로그인한 사용자가 팀원 목록에 없음.");
    }
  }, [members]);

  return { myUserId, myNickname };
};

export default useUserInfo;
