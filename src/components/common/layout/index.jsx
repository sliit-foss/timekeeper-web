import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Explorer, Navigation } from "@/components/docs";
import meta from "@/pages/docs/meta.json";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div
      className={twMerge(
        "border-custom",
        "mx-auto max-w-[1160px] border-x border-solid border-gray-extra-light font-inter"
      )}
    >
      <Header className="mx-[40px]" />
      <div className="border-floating border-t-2 z-50" />
      <motion.main
        className="min-h-screen mx-auto bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        <div className="2xl:absolute 2xl:w-full flex flex-col 2xl:flex-row justify-center left-0 overflow-x-hidden">
          <Navigation meta={meta} />
          <div className="2xl:min-w-[1160px]" />
          <Explorer />
        </div>
        {children}
      </motion.main>
      <div className="border-floating border-t-2 z-50" />
      <Footer className="mx-[40px]" />
    </div>
  );
};

export default Layout;
