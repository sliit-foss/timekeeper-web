import { FaGithub } from "react-icons/fa";
import { FossLogoDark, Timekeeper, Times } from "@/icons";
import { Button } from "..";

const Header = ({ className }) => {
  return (
    <header className={`items-center grid grid-flow-col py-[30px] ${className}`}>
      <div className="grid place-content-start grid-flow-col items-center space-x-[30px]">
        <Timekeeper height="46px" width="52px" />
        <Times height="15px" width="15px" className="opacity-20" />
        <FossLogoDark />
      </div>
      <div className="grid place-content-end grid-flow-col items-center">
        <Button
          href="#"
          className="hidden sm:flex bg-transparent hover:outline-transparent"
          arrowClassName="text-primary-light"
        >
          See the docs
        </Button>
        <a href="#" className="hover:text-purple-700">
          <FaGithub size={36} />
        </a>
      </div>
    </header>
  );
};

export default Header;
