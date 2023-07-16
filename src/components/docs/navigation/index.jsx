import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { compact, flatMap, last, startCase, throttle } from "lodash";
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
    const currentFromPath = location.pathname.replace("/docs/", "");
    if (currentFromPath !== current) setCurrent(currentFromPath);
  }, [location.pathname]);

  const parentNodes = useMemo(() => {
    return compact(
      meta.reduce(
        (acc, l1) => [
          ...acc,
          l1.pages?.length && constructDocRoute(l1),
          ...flatMap(l1.pages, (l2) => constructDocRoute(l1, l2))
        ],
        []
      )
    );
  }, [meta]);

  const onSelect = throttle(
    (value) => {
      if (!parentNodes.includes(value)) {
        setCurrent(value);
        navigate(`/docs/${value}`);
      }
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
        parentNodes={parentNodes}
        onSelect={onSelect}
        current={current}
        className={twMerge("hidden 2xl:block pl-3", className)}
      />
      <NavigationMobile
        meta={meta}
        parentNodes={parentNodes}
        onSelect={onSelect}
        current={current}
        className={twMerge("block 2xl:hidden", className)}
      />
    </>
  );
};

export default Navigation;
