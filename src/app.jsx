import { Header, Footer, Layout } from "@/components/common";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
