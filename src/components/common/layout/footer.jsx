import LogoFOSS from "../../assets/logo-foss";
import Logo from "../../assets/logo";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineArrowUp
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-[40px]">
      <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2">
        <div className="space-y-4 col-start-1">
          <LogoFOSS />
          <p className="md:w-[244px] text-xs opacity-40 font-sf">
            Welcome to SLIIT FOSS community. We&apos;re a group of volunteers who believe in the usage of Free/Open
            Source Software (FOSS)
          </p>
          <div className="font-bold text-[20px] font-inter">Connect with us</div>
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
            <Logo height={46} />
          </div>
          <span className="font-cabinet row-start-2 text-[20px] font-bold text-center">Timekeeper</span>
        </div>

        <div className="md:col-start-3 md:row-start-1 col-start-1 md:mt-0 mt-10 row-start-2 col-span-2 grid grid-rows-4 md:place-content-end">
          <div className="font-bold text-[20px] font-inter row-start-1">Visit us on</div>
          <button className="btn-primary w-fit text-[16px] mx-0">
            <span className="gradient-text">sliitfoss.org</span>
            <AiOutlineArrowUp style={{ color: "#11EFE3", transform: "rotate(45deg)" }} />
          </button>
          <div className="font-bold text-[20px] font-inter row-start-3">Open with source</div>
          <button className="btn-primary w-fit text-[16px] mx-0">
            <span className="gradient-text">Visit at</span>
            <AiFillGithub />
          </button>
        </div>
      </div>
      <div className="text-center mt-[40px]">Crafted with ❤️ at SLIIT FOSS</div>
    </footer>
  );
};

export default Footer;
