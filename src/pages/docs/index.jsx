import { Route, Routes } from "react-router-dom";
import { BreadCrumbs, Explorer, Navigation } from "@/components/docs";
import meta from "./meta.json";

const pages = import.meta.glob("./**/**.mdx", { eager: true });

const routes = Object.entries(pages).map(([path, page]) => {
  return (
    <Route
      key={path}
      path={path.replace("./", "").replace(".mdx", "")}
      element={<div className="px-6 2xl:px-7 pb-7 markdown relative z-50">{page.default()}</div>}
    />
  );
});

const Docs = () => {
  return (
    <>
      <div className="2xl:absolute 2xl:w-full flex flex-col 2xl:flex-row justify-center left-0 overflow-x-hidden">
        <Navigation meta={meta} />
        <div className="2xl:min-w-[1160px]" />
        <Explorer />
      </div>
      <BreadCrumbs />
      <Routes>{routes}</Routes>
    </>
  );
};

export default Docs;
