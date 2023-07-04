import { FaChevronRight, FaGithub } from "react-icons/fa";
import { FossLogoDark, Timekeeper, Times } from "@/icons";

const Header = ({ className }) => {
  return (
    <header className={`items-center grid grid-flow-col py-[30px] ${className}`}>
      <div className="grid place-content-start grid-flow-col items-center space-x-[30px]">
        <Timekeeper height="46px" width="52px" />
        <Times height="15px" width="15px" className="opacity-20" />
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
