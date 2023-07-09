import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { default as Aos } from "aos";
import { Layout } from "@/components/common";
import { default as Docs } from "@/docs";
import { Landing } from "@/pages";
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
    <Layout>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/docs/*" element={<Docs />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
