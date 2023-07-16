import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { default as Aos } from "aos";
import { AnimatePresence } from "framer-motion";
import { Layout, ScrollToTop } from "@/components/common";
import { Docs, Landing } from "@/pages";
import "aos/dist/aos.css";

function App() {
  let basename = "/";

  const matchPreviewDeployment = window.location.pathname.match(/preview\/pr-\d+/);

  if (matchPreviewDeployment) {
    basename += matchPreviewDeployment[0];
  }

  useEffect(() => {
    Aos.init({ offset: 0, duration: 850 });
    window.addEventListener("load", Aos.refresh);
  }, []);

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/docs/*" element={<Docs />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
