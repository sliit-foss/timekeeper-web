import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useWindowDimension = () => {
  const [dimension, setDimension] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setDimension([window.innerWidth, window.innerHeight]);
    }, 5);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return dimension;
};

export default useWindowDimension;
