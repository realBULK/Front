import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const DietSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <h3>1djfskjlskjjsfljksflsjfskljf</h3>
        </div>
        <div>
          <h3>2kfdjsfljaslfjasljkf</h3>
        </div>
        <div>
          <h3>3sflasdfsfjslfk</h3>
        </div>
        <div>
          <h3>4fdfjskdjkjfkedf</h3>
        </div>
        <div>
          <h3>5fjaksjlajflk</h3>
        </div>
        <div>
          <h3>6dkfjlfjaemjawfmwkm</h3>
        </div>
      </Slider>
    </div>
  )
}

export default DietSlider
