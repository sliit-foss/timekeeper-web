import { kebabCase } from "lodash";

export const constructDocRoute = (l1, l2, l3) =>
  kebabCase(l1.name) + (l2 ? "/" + kebabCase(l2.name) : "") + (l3 ? "/" + kebabCase(l3.name) : "");
