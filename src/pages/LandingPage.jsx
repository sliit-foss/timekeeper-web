import OurVision from "../components/ourVision";
import timelineData from "../data/timelineData.json";

const LandingPage = () => {
  return <OurVision dataList={timelineData.timeline} />;
};

export default LandingPage;
