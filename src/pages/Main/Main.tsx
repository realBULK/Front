import React, { useState, useEffect} from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

import character from "../../assets/character.svg";
import character_eat from "../../assets/BULK_EAT.svg";
import background1 from "../../assets/background1.svg";
import background2 from "../../assets/background2.svg";
import background3 from "../../assets/background3.svg";
import background4 from "../../assets/background4.svg";
import background5 from "../../assets/background5.svg";
import bulkfood from "../../assets/BulkFood.svg";
import CalorieCard from "../../components/main/CalorieCard";
import CharacterArea from "../../components/main/CharacterArea";
import LevelProgress from "../../components/main/LevelProgress";

interface CharacterData {
  id: number;
  name: string;
  level: number;
  point: number;
}

interface FoodSetting {
  calories: number;
  carbohydrates: number;
  protein: number;
  fat: number;
}

interface DailyFoodData {
  calories: number;
  carbohydrates: number;
  protein: number;
  fat: number;
}

interface UserFoodData {
  setting: FoodSetting;
  dailyyFoodData: DailyFoodData;
}

interface ApiResponse {
  characterData: CharacterData;
  userFoodData: UserFoodData;
}

const Main = () => {

  const navigate = useNavigate();

  const backgroundImages = {
    orange: background1,
    purple: background2,
    teal: background3,
    blue: background4,
    green: background5,
  };

  const colors = {
    orange: { bar: "#FF9163", background: "#F4E3DC" },
    purple: { bar: "#9A7EB1", background: "#DED1E8" },
    teal: { bar: "#447982", background: "#BEE2DE" },
    blue: { bar: "#6FA9EC", background: "#BBD5F3" },
    green: { bar: "#AEE88B", background: "#FFFAD4" },
  };

  const getInitialColor = () => {
    const storedColor = localStorage.getItem("selectedColor");
    return storedColor ? JSON.parse(storedColor) : colors.orange;
  };

  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [, setIsEating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(getInitialColor);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages.orange);
  const [buttonPosition, setButtonPosition] = useState({ x: 275, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [characterImage, setCharacterImage] = useState(character);
  const [isFed, setIsFed] = useState(() => {
    const storedValue = localStorage.getItem("isFed");
    if (storedValue === null) {
      localStorage.setItem("isFed", "true"); // 기본값 설정
      return true;
    }
    return storedValue === "true";
  });
  const [, setTimer] = useState<number | null>(null);

  useEffect(() => {
    setBackgroundImage(backgroundImages[getColorKey(selectedColor)]);
  }, [selectedColor]);

  // 색상의 키를 찾는 함수
  const getColorKey = (colorObj: { bar: string; background: string }): keyof typeof colors => {
    return (
      (Object.keys(colors) as (keyof typeof colors)[]).find(
        (key) => colors[key].bar === colorObj.bar
      ) || "orange"
    );
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home/info");
        const result = await response.json();
        if (result.isSuccess) {
          setApiData(result.data);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // 터치 이동 방지
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventScroll, { passive: false });
    return () => document.removeEventListener("touchmove", preventScroll);
  }, []);

  useEffect(() => {
    const timerEndTime = localStorage.getItem("timerEndTime");
    if (timerEndTime) {
      const remainingTime = parseInt(timerEndTime, 10) - Date.now();
      if (remainingTime > 0) {
        setCharacterImage(character_eat);
        setIsFed(false);
        setTimer(setTimeout(() => resetCharacterState(), remainingTime));
      } else {
        resetCharacterState();
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isFed", isFed.toString());
  }, [isFed]);

  // 드래그 시작 (데스크톱)
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    startDragging(e.clientX, e.clientY);
  };

  // 드래그 시작 (모바일)
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];
    startDragging(touch.clientX, touch.clientY);
  };

  const startDragging = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setOffset({
      x: clientX - buttonPosition.x,
      y: clientY - buttonPosition.y,
    });
  };

  // 드래그 이동 (데스크톱)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      moveButton(e.clientX, e.clientY);
    }
  };

  // 드래그 이동 (모바일)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const touch = e.touches[0];
      moveButton(touch.clientX, touch.clientY);
    }
  };

  const moveButton = (clientX: number, clientY: number) => {
    const newX = clientX - offset.x;
    const newY = clientY - offset.y;
  
    setButtonPosition({ x: newX, y: newY });
  
    // 음식이 캐릭터 근처에 도달했을 때
    if (newX >= 80 && newX <= 120 && newY >= 145 && newY <= 170) {
      setIsFed(false);
      setIsDragging(false);
      setButtonPosition({ x: 275, y: 40 });
  
      setIsEating(true);
  
      const eatTimer = setInterval(() => {
        setCharacterImage((prev) => (prev === character ? character_eat : character));
      }, 300); // 0.3초 간격으로 이미지 변경
  
      setTimeout(() => {
        clearInterval(eatTimer); // 3초 후 애니메이션 정지
        setIsEating(false);
        setCharacterImage(character_eat); // 원래 이미지로

        // ✅ 3초 후 "/record" 페이지로 이동
        setTimeout(() => {
          navigate("/record");
        })
      }, 2000);
  
      const timerEndTime = Date.now() + 10000; // 10초 후 먹이 상태 복구
      localStorage.setItem("timerEndTime", timerEndTime.toString());
  
      setTimer(
        setTimeout(() => {
          resetCharacterState();
        }, 10000)
      );
    }
  };

  // 드래그 종료 (데스크톱 + 모바일 공통)
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchEnd = () => setIsDragging(false);

  const resetCharacterState = () => {
    setCharacterImage(character);
    setIsFed(true);
    localStorage.setItem("isFed", "true");
    localStorage.removeItem("timerEndTime");
  };

  const handleColorChange = (color: { bar: string; background: string }) => {
    setSelectedColor(color);
    setBackgroundImage(backgroundImages[getColorKey(color)]);
    localStorage.setItem("selectedColor", JSON.stringify(color));
  };

  return (
    <div
      className="flex flex-col items-center h-screen p-[15px]"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      {/* 상단 레벨 표시 */}
      <div className="w-full flex flex-col mb-4">
        <div className="flex items-center">
          <div className="relative w-10 h-10 mr-3">
            <LevelProgress progressColor={selectedColor.bar} progressPercentage={apiData?.characterData.point ?? 0} />
          </div>
          <h1 className="text-[40px] font-[GmarketSansWeight] text-black leading-[1.21]">
            LV. {apiData?.characterData.level ?? "1"}
          </h1>
        </div>

        {/* 칼로리 카드 */}
        <CalorieCard
          selectedColor={selectedColor}
          colors={colors}
          onColorChange={handleColorChange}
          apiData={apiData}
          isLoading={isLoading}
        />
      </div>

      {/* 캐릭터 영역 */}
      <CharacterArea
        // background={background}
        background={backgroundImage}
        characterImage={characterImage}
        bulkfood={bulkfood}
        buttonPosition={buttonPosition}
        isFed={isFed}
        handleMouseDown={handleMouseDown}
        handleTouchStart={handleTouchStart}
      />

      {/* 하단 네비게이션 */}
      <NavBar />
      
    </div>
  );
};

export default Main;