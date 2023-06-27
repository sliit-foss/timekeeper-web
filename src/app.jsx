import { Layout } from "@/components/common";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "@/pages";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
