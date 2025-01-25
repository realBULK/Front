interface RatingProps {
  rating: number // 평가값 (0 ~ 5)
  width: number
  height: number
}

const Rating = ({ rating, width, height }: RatingProps) => {
  const stars = []

  // 별 5개 생성
  for (let i = 0; i < 5; i++) {
    const isFilled = i < rating // 평가값에 따라 별이 채워지는지 여부 확인
    stars.push(
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 49 49" fill="none">
        <mask
          id={`mask0_821_1436_${i}`}
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="3"
          width="44"
          height="43"
        >
          <path
            d="M21.7262 36.6C23.2004 31.2625 28.3549 27.45 34.2922 28.0803C39.9449 28.6802 44.4386 33.4483 44.7232 39.1213C44.7944 40.6158 44.5911 42.0493 44.1539 43.3811C43.8896 44.1945 43.0966 44.7333 42.2324 44.7333H11.954C6.8219 44.7333 2.9728 40.0373 3.9793 35.0048L10.1667 4.06665H22.3667L26.4334 11.1833L17.7206 17.4155L15.2501 14.2333"
            fill={isFilled ? '#555555' : '#555555'} // 평가값에 따라 색상을 변경
          />
          <path
            d="M21.7262 36.6C23.2004 31.2625 28.3549 27.45 34.2922 28.0803C39.9449 28.6802 44.4386 33.4483 44.7232 39.1213C44.7944 40.6158 44.5911 42.0493 44.1539 43.3811C43.8896 44.1945 43.0966 44.7333 42.2324 44.7333H11.954C6.8219 44.7333 2.9728 40.0373 3.9793 35.0048L10.1667 4.06665H22.3667L26.4334 11.1833L17.7206 17.4155L15.2501 14.2333M17.7307 17.4155L22.3667 34.5666"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask={`url(#mask0_821_1436_${i})`}>
          <path d="M0 0H48.8V48.8H0V0Z" fill={isFilled ? '#E9AD89' : '#000000'} />
        </g>
      </svg>,
    )
  }

  return <div className="flex">{stars}</div>
}

export default Rating
