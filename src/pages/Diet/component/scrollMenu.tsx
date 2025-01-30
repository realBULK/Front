import { useState } from 'react'

interface ScrollMenuProps {
  img: string
  menu: string
  like: boolean
  likeNum: number
}

interface ScrollMenuSet {
  scrollMenus: ScrollMenuProps[]
}

const ScrollMenu: React.FC<ScrollMenuSet> = ({ scrollMenus }) => {
  const [menus, setMenus] = useState(scrollMenus)

  const onClickHandler = (index: number) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu, i) =>
        i === index ? { ...menu, like: !menu.like, likeNum: menu.like ? menu.likeNum - 1 : menu.likeNum + 1 } : menu,
      ),
    )
  }

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 w-max">
        {menus.map((item: ScrollMenuProps, index: number) => (
          <div
            key={index}
            className="flex w-[143px] h-[190px] bg-white flex-col justify-center items-center gap-2 px-[13px] py-[7px] rounded-[10px]"
          >
            <img src={item.img} alt={item.menu} className="w-[110px] h-[72px] rounded-[10px]" />
            <div className="text-black text-sm not-italic font-medium leading-[100%] tracking-[-0.28px]">
              {item.menu}
            </div>
            <div className="flex items-center gap-1 text-black text-center text-sm not-italic font-medium leading-[100%] tracking-[-0.28px]">
              <img
                src={item.like ? '/src/assets/like_fill.svg' : '/src/assets/like_empty.svg'}
                alt="like"
                className="w-3 h-3 cursor-pointer"
                onClick={() => onClickHandler(index)}
              />
              {item.likeNum}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollMenu
