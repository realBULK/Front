import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import DietBox from '@/components/DietBox'

interface MealItems {
  name: string
}
interface Meal {
  mealType: string //아침점심저녁간식
  mealItemNames: MealItems[]
  mealCalories: number
  mealCarbos: number
  mealProteins: number
  mealFats: number
}

interface Diet {
  dietItem: Meal[]
}

const DietSlider: React.FC<Diet> = ({ dietItem }) => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }

  return (
    <div className="mt-4">
      {dietItem.length > 0 ? (
        <Slider {...settings} dotsClass="test-css">
          {dietItem.map((meal, index) => (
            <div key={index}>
              <DietBox
                id={index.toString()}
                type={meal.mealType}
                items={meal.mealItemNames}
                mealCalories={meal.mealCalories}
                mealCarbos={meal.mealCarbos}
                mealProteins={meal.mealProteins}
                mealFats={meal.mealFats}
                isDetail={false}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">식단 정보가 없습니다.</p>
      )}
    </div>
  )
}

export default DietSlider
