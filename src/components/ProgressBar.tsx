import React from 'react'

interface ProgressBarProps {
  progress: number // 진행률 (0~100)
  height?: string // 높이 (기본값 8px) -> 홈화면에서 사용할때 활용하면됨.
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = '8px' }) => {
  return (
    <div className="max-w-xs bg-gray-200 rounded-full overflow-hidden mx-auto" style={{ height }}>
      <div
        className="transition-all duration-300"
        style={{
          width: `${progress}%`,
          height,
          background: progress === 100 ? '#445AFF' : 'linear-gradient(to right, #445AFF, #A8B4FF)',
          borderRadius: '9999px',
        }}
      ></div>
    </div>
  )
}

export default ProgressBar
