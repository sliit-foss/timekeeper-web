import { useEffect, useState } from "react";
import { useLayout } from "@/components/common/layout";
import { useWindowDimension } from "@/hooks";
import { Navigation } from "./components";
import meta from "./pages/meta.json";

const Docs = () => {
  const [main, setMain] = useState(null);

  const layout = useLayout();

  useEffect(() => {
    setMain(layout?.current);
  }, [layout]);

  useWindowDimension();

  return (
    <div className="">
      <Navigation meta={meta} className="absolute left-0" style={{ width: main?.offsetLeft }} />
      <h1>Page Content</h1>
    </div>
  );
};

export default Docs;
