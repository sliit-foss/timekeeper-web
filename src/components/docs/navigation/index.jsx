import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { last, startCase, throttle } from "lodash";
import { twMerge } from "tailwind-merge";
import { useTitle } from "@/hooks";
import { constructDocRoute } from "@/utils";
import NavigationCore from "./core";
import NavigationMobile from "./mobile";

const Navigation = ({ meta, className }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const [current, setCurrent] = useState(constructDocRoute(meta[0]));

  useTitle(`${startCase(last(current?.split("/")))} - Timekeeper`, [current]);

  useEffect(() => {
    const currentFromPath = location.pathname.replace("/docs", "").split("/").reverse()[0];
    if (currentFromPath !== current) setCurrent(currentFromPath);
  }, [location.pathname]);

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

  return (
    <>
      <NavigationCore
        meta={meta}
        onSelect={onSelect}
        current={current}
        className={twMerge("hidden 2xl:block", className)}
        data-aos="fade-right"
        data-aos-duration="300"
      />
      <NavigationMobile
        meta={meta}
        onSelect={onSelect}
        current={current}
        className={twMerge("block 2xl:hidden", className)}
      />
    </>
  );
};

export default Navigation;
