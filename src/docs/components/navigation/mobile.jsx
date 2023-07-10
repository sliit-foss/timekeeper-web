import { twMerge } from "tailwind-merge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common";
import NavigationCore from "./core";

const NavigationMobile = ({ className, ...props }) => {
  return (
    <Accordion type="multiple" collapsible="true" className={twMerge("w-full", className)}>
      <AccordionItem value="page-selector">
        <AccordionTrigger>afsdfsdf</AccordionTrigger>
        <AccordionContent>
          <NavigationCore {...props} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NavigationMobile;
