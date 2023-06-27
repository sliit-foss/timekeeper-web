import { Timekeeper, FossLogoDark } from "@/icons";
import { FaGithub, FaTimes, FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="items-center grid grid-cols-2 py-[30px]">
      <div className="flex flex-shrink-0 flex-grow items-center space-x-[30px]">
        <Timekeeper height={46} />
        <FaTimes style={{ opacity: 0.3 }} />
        <FossLogoDark />
      </div>
      <div className="flex col-start-2 place-content-end">
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
