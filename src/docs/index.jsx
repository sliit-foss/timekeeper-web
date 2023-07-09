import { useEffect, useState } from "react";
import { useLayout } from "@/components/common/layout";
import { useBreakpoint, useWindowDimension } from "@/hooks";
import { Navigation } from "./components";
import meta from "./pages/meta.json";

const Docs = () => {
  const [main, setMain] = useState(null);

  const layout = useLayout();

  useEffect(() => {
    setMain(layout?.current);
  }, [layout]);

  useWindowDimension();

  const xxxl = useBreakpoint("2xl");

  return (
    <div className="">
      {xxxl && (
        <Navigation
          meta={meta}
          className="absolute left-0"
          style={{ width: main?.offsetLeft }}
          data-aos="fade-right"
          data-aos-duration="300"
        />
      )}
      <h1 className="p-7">Page Content</h1>
    </div>
  );
};

export default Docs;
