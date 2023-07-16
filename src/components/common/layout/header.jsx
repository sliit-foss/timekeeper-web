import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { repositoryLink } from "@/constants";
import { FossLogoDark, Timekeeper, Times } from "@/icons";
import { Button } from "..";

const Header = ({ className }) => {
  const location = useLocation();

  const isDocs = location.pathname.match(/^\/docs/);

  return (
    <header className={`items-center grid grid-flow-col py-[30px] ${className}`}>
      <div className="grid place-content-start grid-flow-col items-center space-x-[30px]">
        <Link to="/">
          <Timekeeper height="46px" width="52px" tilt />
        </Link>
        <Times height="15px" width="15px" className="opacity-20" />
        <FossLogoDark />
      </div>
      <div className="grid place-content-end grid-flow-col items-center">
        <AnimatePresence>
          {!isDocs && (
            <div className="overflow-clip">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Button
                  to="/docs/getting-started"
                  className="hidden sm:flex bg-transparent hover:outline-transparent"
                  arrowClassName="text-primary-light"
                >
                  See the docs
                </Button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <Link href={repositoryLink} target="_blank" className="icon-hover">
          <FaGithub size={36} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
