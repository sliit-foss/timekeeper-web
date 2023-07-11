import { Route, Routes } from "react-router-dom";
import { BreadCrumbs, Explorer, Navigation } from "@/components/docs";
import meta from "./meta.json";

const pages = import.meta.glob("./**/**.mdx");

const routes = await Promise.all(
  Object.entries(pages).map(async ([path, module]) => {
    return module().then((resolvedModule) => {
      return (
        <Route
          key={path}
          path={path.replace("./", "").replace(".mdx", "")}
          element={<div className="px-6 2xl:px-7 pb-7 markdown">{resolvedModule.default()}</div>}
        />
      );
    });
  })
);

const Docs = () => {
  return (
    <div className="2xl:absolute 2xl:w-full flex flex-col 2xl:flex-row justify-center left-0">
      <Navigation meta={meta} />
      <div className="2xl:min-w-[1160px]">
        <BreadCrumbs />
        <Routes className="p-7">{routes}</Routes>
      </div>
      <Explorer />
    </div>
  );
};

export default Docs;
