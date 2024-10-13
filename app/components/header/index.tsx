import BurgerMenu from '../burgerMenu'

import Image from "next/image";
import DownloadIcon from "../../../public/arrow-to-bottom.svg"

export default function index() {
  return (
    <div className="z-20 fixed grid grid-cols-3 items-center bg-gray md:px-20 w-full">
        <Image
          src="/logo.webp"
          width={714}
          height={524}
          alt="Picture of the author"
          className="col-span-2 w-11 pl-3 md:pl-0"
        />
        <div className="flex gap-3 justify-self-end items-center h-full">
        <a 
          href="/GANADEN, Matthew Jason RESUME.pdf"
          download 
          className="cursor-pointer h-3/4 w-3/4 flex justify-center items-center hover:bg-darkgray hover:rounded-sm hover:border-[#383838] transition-all duration-300 ease-in-out"
        >
          <span className="flex items-center mx-10 text-xl">
            Resume 
            <Image src={DownloadIcon} alt="Download Icon" className="ml-2" />
          </span>
        </a>

        <BurgerMenu />
      </div>

    </div>
  )
}
