import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { default as Aos } from "aos";
import { Layout } from "@/components/common";
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
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
