import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-0 h-screen lg:mx-auto px-10 overflow-x-hidden dark:invert-0 bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
