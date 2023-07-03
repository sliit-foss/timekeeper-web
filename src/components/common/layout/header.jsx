import { FaChevronRight, FaGithub, FaTimes } from "react-icons/fa";
import { FossLogoDark, Timekeeper } from "@/icons";

const Header = ({ className }) => {
  return (
    <header className={`items-center grid grid-flow-col py-[30px] ${className}`}>
      <div className="grid place-content-start grid-flow-col items-center space-x-[30px]">
        <Timekeeper height="46px" width="52px" />
        <FaTimes className="opacity-20" />
        <FossLogoDark />
      </div>
      <div className="grid place-content-end grid-flow-col items-center">
        <a href="#" className="md:flex hidden items-center space-x-1 mr-10">
          <span className="font-bold text-[20px] font-sf gradient-text">See the docs</span>
          <FaChevronRight style={{ color: "#11EFE3" }} />
        </a>
        <a href="#">
          <FaGithub size={36} />
        </a>
      </div>
    </header>
  );
};

export default Header;
