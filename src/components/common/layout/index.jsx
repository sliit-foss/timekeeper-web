import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto max-w-[1160px] border-x border-gray-light px-6 sm:px-10">
      <Header />
      <main className="container min-h-screen mx-auto overflow-x-hidden dark:invert-0 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
