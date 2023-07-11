import { twMerge } from "tailwind-merge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common";
import Shell from "./shell";

const ShellTabs = ({ className, selected, tabs }) => {
  return (
    <Tabs defaultValue={selected ?? tabs[0]?.name} className={twMerge("-ml-1", className)}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name} className="w-20 text-[16px]">
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.name} value={tab.name}>
          <Shell code={tab.code} styles={{ root: "mt-2" }} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ShellTabs;
