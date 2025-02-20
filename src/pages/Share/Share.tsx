import Member from "@/components/group/Member";
import Week from "@/components/group/Week";
import NavBar from "@/components/NavBar";

const Share = () => {

    return (
      <div className="flex flex-col items-center h-screen p-[15px] pt-[0px]">
        <Week/>
        <Member/>
        <NavBar />
      </div>
    )
  };
  
  export default Share;
  