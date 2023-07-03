import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1160px] border-x border-gray-light">
      <Header className="mx-[40px]" />
      <div className="border-t-2 border-dashed absolute inset-x-0"></div>
      <main className="min-h-screen mx-auto overflow-x-hidden dark:invert-0 bg-white">{children}</main>
      <Footer className="mx-[40px]" />
    </div>
  );
};

export default Layout;
