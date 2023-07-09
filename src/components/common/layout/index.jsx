import { motion } from "framer-motion";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1160px] border-x border-gray-light font-inter">
      <Header className="mx-[40px]" />
      <div className="border-t-2 border-dashed absolute inset-x-0 z-50" />
      <motion.main
        className="min-h-screen mx-auto bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <div className="border-t-2 border-dashed absolute inset-x-0 z-50" />
      <Footer className="mx-[40px]" />
    </div>
  );
};

export default Layout;
