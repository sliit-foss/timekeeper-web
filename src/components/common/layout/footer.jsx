import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/common";
import { FossLogoDark, Timekeeper } from "@/icons";

const Footer = ({ className }) => {
  return (
    <footer className={`mt-[40px] ${className}`}>
      <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2">
        <div className="space-y-4 col-start-1">
          <FossLogoDark />
          <p className="md:w-[244px] text-xs text-gray-500 opacity-80 font-sf">
            Welcome to SLIIT FOSS community. We&apos;re a group of volunteers who believe in the usage of Free/Open
            Source Software (FOSS)
          </p>
          <div className="font-semibold text-[20px]">Connect with us</div>
          <div className="flex space-x-2 flex-shrink-0">
            <a href="#" className="hover:text-blue-600">
              <AiFillFacebook />
            </a>
            <a href="#" className="hover:text-purple-500">
              <AiFillInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <AiOutlineTwitter />
            </a>
            <a href="#" className="hover:text-blue-600">
              <AiFillLinkedin />
            </a>
            <a href="#" className="hover:text-red-500">
              <AiFillYoutube />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 md:gap-y-3 translate-x-5 md:translate-x-0">
          <div className="flex justify-center items-start">
            <Timekeeper height={46} />
          </div>
          <span className="font-cabinet row-start-2 text-[20px] font-bold text-center">Timekeeper</span>
        </div>

        <div className="grid grid-rows-1 md:col-start-3 col-span-2 md:place-content-end min-h-0 min-w-0 md:mt-0 mt-10 ">
          <div className="flex flex-col gap-y-4 md:gap-y-3 -translate-y-0.5">
            <div className="font-semibold text-[20px]">Visit us on</div>
            <Button className="md:w-11/12 h-8 bg-white border gap-x-1.5">
              <span className="gradient-text text-[1rem]">sliitfoss.org</span>
              <div className="-rotate-45 mb-0.5 md:mb-1">
                <div
                  className={twMerge(
                    "text-primary-medium pl-0.5 mb-0.5 animated-chevron",
                    "before:h-[0.14rem] before:top-[42.6%] before:w-[0.8rem] before:group-hover:w-[0.95rem]"
                  )}
                >
                  <FaChevronRight className="p-[0.15rem]" />
                </div>
              </div>
            </Button>
            <div className="font-semibold text-[20px] mt-0.5">Open with source</div>
            <Button className="md:w-9/12 h-8 bg-transparent border gap-x-2">
              <span className="gradient-text text-[1rem]">Visit at</span>
              <AiFillGithub className="text-black" />
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-dashed absolute inset-x-0 mt-7"></div>
      <div className="text-xs font-medium text-center pt-1 pb-3 mt-9">Crafted with 🖤 at SLIIT FOSS</div>
    </footer>
  );
};

export default Footer;
