import { Header, Footer, Layout } from "@/components/common";
import OurVision from "./components/ourVision";
import timelineData from "./data/timelineData.json";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Footer />
        <OurVision dataList={timelineData.timeline} />
      </Layout>
    </>
  );
}

export default App;
