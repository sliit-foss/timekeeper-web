import { useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { default as Aos } from "aos";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Footer, Header, ScrollToTop } from "@/components/common";
import { Docs, Landing } from "@/pages";
import "aos/dist/aos.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({ offset: 0, duration: 850 });
    window.addEventListener("load", Aos.refresh);
  }, []);

  const maxWidth = "max-w-[1200px]";

  const navigationStyles = useMemo(() => {
    return twMerge(
      `border-gray-extra-light ${maxWidth} mx-auto px-[40px] md:px-[55px] border-x transition-all duration-500`,
      location.pathname.includes("docs")
        ? "xxl-mid:w-full xxl-mid:border-transparent xxl-mid:max-w-none px-[35px]"
        : `xxl-mid:w-[1200px] xxl-mid:max-w-none`
    );
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Header className={navigationStyles} />
      <div className={twMerge("border-custom mx-auto border-x border-solid border-gray-borders font-inter", maxWidth)}>
        <div className="border-floating border-t-2 z-50" />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname.includes("/docs") ? "docs" : location.pathname}
            className="min-h-screen mx-auto bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/docs/*" element={<Docs />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <div className="border-floating border-t-2 z-50" />
      </div>
      <Footer className={twMerge(navigationStyles, "px-[40px] md:px-[55px]")} />
    </>
  );
};

export default App;
