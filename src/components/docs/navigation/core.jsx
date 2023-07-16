import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common";
import { constructDocRoute } from "@/utils";

const NavigationCore = ({ className, meta, parentNodes, onSelect, current, ...props }) => {
  const lacation = useLocation();

  return (
    <AnimatePresence>
      {lacation.pathname.includes("docs") && (
        <motion.nav
          initial={{ opacity: 0, translateX: "-100%" }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: "-100%" }}
          transition={{ duration: 0.3 }}
          className={twMerge("w-full h-full py-3", className)}
          {...props}
        >
          <Accordion type="multiple" collapsible="true" className="w-full px-3.5" defaultValue={parentNodes}>
            {meta.map((l1) => {
              const l1Value = constructDocRoute(l1);
              return (
                <AccordionItem key={l1Value} value={l1Value} onSelect={onSelect}>
                  <AccordionTrigger chevron={!!l1.pages?.length} value={l1Value} selectedValue={current}>
                    {l1.name}
                  </AccordionTrigger>
                  {l1.pages?.length ? (
                    <AccordionContent>
                      {l1.pages.map((l2) => {
                        const l2Value = constructDocRoute(l1, l2);
                        return (
                          <AccordionItem key={l2Value} value={l2Value} onSelect={onSelect} className="pl-3">
                            <AccordionTrigger value={l2Value} selectedValue={current}>
                              {l2.name}
                            </AccordionTrigger>
                            {l2.pages?.length ? (
                              <AccordionContent>
                                {l2.pages.map((l3) => {
                                  const l3Value = constructDocRoute(l1, l2, l3);
                                  return (
                                    <AccordionItem key={l3Value} value={l3Value} onSelect={onSelect} className="pl-3">
                                      <AccordionTrigger
                                        chevron={!!l3.pages?.length}
                                        value={l3Value}
                                        selectedValue={current}
                                      >
                                        {l3.name}
                                      </AccordionTrigger>
                                    </AccordionItem>
                                  );
                                })}
                              </AccordionContent>
                            ) : null}
                          </AccordionItem>
                        );
                      })}
                    </AccordionContent>
                  ) : null}
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavigationCore;
