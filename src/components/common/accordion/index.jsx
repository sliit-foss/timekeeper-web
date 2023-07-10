import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, onSelect, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={twMerge("", className)}
    onClick={() => onSelect?.(props.value)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, selectedValue, chevron = true, ...props }, ref) => {
  const selected = selectedValue === props.value;
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={twMerge(
          "w-full flex flex-1 items-center justify-between text-left my-1 py-3 font-medium transition-all [&[data-state=open]>svg]:rotate-180 ",
          selected ? "bg-[#222222] text-white" : "text-gray-dark",
          "hover:bg-[#222222] hover:text-white rounded-md px-3.5",
          className
        )}
        {...props}
      >
        {children}
        {chevron && <FaChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={twMerge(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
