import { Header, Footer, Layout } from "@/components/common";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
