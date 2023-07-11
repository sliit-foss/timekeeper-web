import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const config = resolveConfig(tailwindConfig);

const useBreakpoint = () => {
  return Object.entries(config.theme.screens).reduce((acc, [key, value]) => {
    acc[key] = window.matchMedia(`(min-width: ${value})`).matches;
    return acc;
  });
};

export default useBreakpoint;
