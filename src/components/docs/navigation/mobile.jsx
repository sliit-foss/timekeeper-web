import { useRef } from "react";
import { last, startCase } from "lodash";
import { twMerge } from "tailwind-merge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common";
import NavigationCore from "./core";

const NavigationMobile = ({ className, onSelect, ...props }) => {
  const selector = useRef(null);
  return (
    <Accordion type="multiple" collapsible="true" className={twMerge("w-full mt-3 px-[25px]", className)}>
      <AccordionItem value="page-selector">
        <AccordionTrigger ref={selector} className="rounded-md">
          {startCase(last(props.current?.split("/")))}
        </AccordionTrigger>
        <AccordionContent>
          <NavigationCore
            onSelect={(value) => {
              onSelect(value);
              selector.current.click();
            }}
            {...props}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NavigationMobile;
