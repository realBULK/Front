import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import DietBox from '@/components/DietBox'

interface DietSliderProps {
  id: string
  title: string
  items: string[]
  nutrients: string[]
  Kcal: number
  icon?: string
  isDetail?: boolean
}

interface Diet {
  dietItem: DietSliderProps[]
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
      <Slider {...settings} dotsClass="test-css">
        <div>
          <DietBox
            id={dietItem[0].id}
            title={dietItem[0].title}
            items={dietItem[0].items}
            nutrients={dietItem[0].nutrients}
            Kcal={dietItem[0].Kcal}
            icon={dietItem[0].icon}
            isDetail={false}
          />
        </div>
        <div>
          <DietBox
            id={dietItem[1].id}
            title={dietItem[1].title}
            items={dietItem[1].items}
            nutrients={dietItem[1].nutrients}
            Kcal={dietItem[1].Kcal}
            icon={dietItem[1].icon}
            isDetail={false}
          />
        </div>
        <div>
          <DietBox
            id={dietItem[2].id}
            title={dietItem[2].title}
            items={dietItem[2].items}
            nutrients={dietItem[2].nutrients}
            Kcal={dietItem[2].Kcal}
            icon={dietItem[2].icon}
            isDetail={false}
          />
        </div>
        <div>
          <DietBox
            id={dietItem[3].id}
            title={dietItem[3].title}
            items={dietItem[3].items}
            nutrients={dietItem[3].nutrients}
            Kcal={dietItem[3].Kcal}
            icon={dietItem[3].icon}
            isDetail={false}
          />
        </div>
      </Slider>
    </div>
  )
}

export default DietSlider
