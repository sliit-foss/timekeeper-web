import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { repositoryLink } from "@/constants";
import { FossLogoDark, Timekeeper, Times } from "@/icons";
import { Button } from "..";

const Header = ({ className }) => {
  const location = useLocation();

  const isDocs = location.pathname.match(/^\/docs/);

  return (
    <header className={`items-center grid grid-flow-col py-[30px] ${className}`}>
      <div className="grid place-content-start grid-flow-col items-center md:space-x-[30px] space-x-3">
        <Link to="/">
          <Timekeeper className="h-[46px] w-[52px]" />
        </Link>
        <Times className="h-[15px] opacity-20" />
        <FossLogoDark className="h-[42px] w-[74px]"/>
      </div>
      <div className="grid place-content-end grid-flow-col items-center">
        {!isDocs && (
          <Button
            to="/docs/getting-started"
            className="hidden sm:flex bg-transparent hover:outline-transparent"
            arrowClassName="text-primary-light"
          >
            See the docs
          </Button>
        )}
        <Link href={repositoryLink} target="_blank" className="icon-hover">
          <FaGithub className="text-[35px]"/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
