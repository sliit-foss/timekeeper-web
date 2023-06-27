const Layout = ({ children }) => {
  return (
    <main className="container mx-0 h-screen lg:mx-auto px-10 overflow-x-hidden dark:invert-0 bg-white">
      {children}
    </main>
  );
};

export default Layout;
