import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { default as Aos } from "aos";
import { AnimatePresence, motion } from "framer-motion";
import { Footer, Header, ScrollToTop } from "@/components/common";
import { Docs, Landing } from "@/pages";
import "aos/dist/aos.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({ offset: 0, duration: 850 });
    window.addEventListener("load", Aos.refresh);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="border-custom mx-auto max-w-[1160px] border-x border-solid border-gray-extra-light font-inter">
        <Header className="mx-[40px]" />
        <div className="border-floating border-t-2 z-50" />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname.includes("/docs") ? "docs" : location.pathname}
            className="min-h-screen mx-auto bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/docs/*" element={<Docs />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <div className="border-floating border-t-2 z-50" />
        <Footer className="mx-[40px]" />
      </div>
    </>
  );
};

export default App;
