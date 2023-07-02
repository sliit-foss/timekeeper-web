import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1160px] border-x border-gray-light">
      <Header className="mx-[40px]"/>
      <main className="min-h-screen mx-auto overflow-x-hidden dark:invert-0 bg-white">
        {children}
      </main>
      <Footer className="mx-[40px]"/>
    </div>
  );
};

export default Layout;
