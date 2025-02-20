const CameraGuide = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
      stroke="yellow"
      strokeWidth="5"
    >
      <path d="M10 50 Q10 10 50 10" />
      <path d="M150 10 Q190 10 190 50" />
      <path d="M10 150 Q10 190 50 190" />
      <path d="M150 190 Q190 190 190 150" />
    </svg>
  )
}

export default CameraGuide
