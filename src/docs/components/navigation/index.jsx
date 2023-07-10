import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { throttle } from "lodash";
import { useBreakpoint } from "@/hooks";
import { getRoutePath } from "../../utils";
import NavigationCore from "./core";
import NavigationMobile from "./mobile";

const Navigation = ({ meta, className }) => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(getRoutePath(meta[0]));

  const xxl = useBreakpoint("2xl");

  const onSelect = throttle(
    (value) => {
      setCurrent(value);
      navigate(`/docs/${value}`);
    },
    100,
    {
      leading: true,
      trailing: false
    }
  );

  if (xxl) {
    return (
      <NavigationCore
        meta={meta}
        onSelect={onSelect}
        current={current}
        className={className}
        data-aos="fade-right"
        data-aos-duration="300"
      />
    );
  }

  return <NavigationMobile meta={meta} onSelect={onSelect} current={current} className={className} />;
};

export default Navigation;
