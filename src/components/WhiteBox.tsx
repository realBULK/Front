import React from 'react'

interface BoxProps {
  children: React.ReactNode // 안에 들어갈 내용
  as?: 'button' | 'div' // 박스를 버튼 또는 div로 사용할 수 있도록
  onClick?: () => void // 클릭 핸들러 (버튼으로 사용 시)
  className?: string // 추가 커스터마이징을 위한 클래스
}

const Box: React.FC<BoxProps> = ({ children, as = 'div', onClick, className = '' }) => {
  const baseStyle =
    'bg-white border rounded-base w-[327px] p-4 flex items-center transition border-solid border-[#EDEDED]'

  if (as === 'button') {
    return (
      <button onClick={onClick} className={`${baseStyle} ${className} focus:outline-none`}>
        {children}
      </button>
    )
  }

  return <div className={`${baseStyle} ${className}`}>{children}</div>
}

export default Box
