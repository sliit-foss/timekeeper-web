import { Layout } from "@/components/common";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "@/pages";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
