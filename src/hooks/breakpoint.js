import { useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import create from "@kodingdotninja/use-tailwind-breakpoint";
import tailwindConfig from "../../tailwind.config";

const config = resolveConfig(tailwindConfig);

const { useBreakpoint: innerUseBreakpoint } = create(config.theme.screens);

const useBreakpoint = (...params) => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  return innerUseBreakpoint(...params);
};

export default useBreakpoint;
