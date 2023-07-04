import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
  AiOutlineTwitter
} from "react-icons/ai";
import { Button } from "@/components/common";
import { FossLogoDark, Timekeeper } from "@/icons";

const Footer = ({ className }) => {
  return (
    <footer className={`mt-[40px] ${className}`}>
      <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2">
        <div className="space-y-4 col-start-1">
          <FossLogoDark />
          <p className="md:w-[244px] text-xs opacity-40 font-sf">
            Welcome to SLIIT FOSS community. We&apos;re a group of volunteers who believe in the usage of Free/Open
            Source Software (FOSS)
          </p>
          <div className="font-bold text-[20px]">Connect with us</div>
          <div className="flex space-x-2 flex-shrink-0">
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
          </div>
        </div>

        <div className="grid col-start-2 grid-rows-3 md:place-content-center place-content-end">
          <div className="mx-[23px] row-start-1">
            <Timekeeper height={46} />
          </div>
          <span className="font-cabinet row-start-2 text-[20px] font-bold text-center">Timekeeper</span>
        </div>

        <div className="md:col-start-3 md:row-start-1 col-start-1 md:mt-0 mt-10 row-start-2 col-span-2 grid grid-rows-4 md:place-content-end min-h-0 min-w-0">
          <div className="font-bold text-[20px] row-start-1">Visit us on</div>
          <a href="https://slitfoss.org">
            <Button className="md:w-3/4 h-8 bg-transparent  font-medium py-[0.1rem] gap-x-2">
              <span className="gradient-text text-[1rem]">sliitfoss.org</span>
              <AiOutlineArrowUp className="text-primary-light rotate-45" />
            </Button>
          </a>

          <div className="font-bold text-[20px] row-start-3">Open with source</div>

          <a href="https://github.com/sliit-foss/timekeeper-web">
            <Button className="md:w-3/4 h-8 bg-transparent  font-medium gap-x-2">
              <span className="gradient-text text-[1rem]">Visit at </span>
              <AiFillGithub className="text-black" />
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 mt-7"></div>
      <div className="text-xs font-medium text-center pt-1 pb-3 mt-9">Crafted with 🖤 at SLIIT FOSS</div>
    </footer>
  );
};

export default Footer;
