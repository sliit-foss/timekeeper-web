import { Explorer, Navigation } from "@/components/docs";
import meta from "./meta.json";

const Docs = () => {
  return (
    <div className="2xl:absolute 2xl:w-full flex flex-col 2xl:flex-row justify-center left-0">
      <Navigation meta={meta} />
      <div className="2xl:min-w-[1160px]">
        <h1 className="p-7">Page Content</h1>
      </div>
      <Explorer />
    </div>
  );
};

export default Docs;
