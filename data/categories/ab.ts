import { CategoryId, Feature } from "@/types/enums";
import type { Category } from "../index";

export const abData: Category = {
  id: CategoryId.AB,
  name: "Ab",
  description: "The category of abelian groups and group homomorphisms. A full subcategory of Grp.",
  features: [
    Feature.ABELIAN,
    Feature.ADDITIVE,
    Feature.COMPLETE,
    Feature.MONOIDAL,
  ],
  links: [
    {
      title: "nLab: Ab",
      url: "https://ncatlab.org/nlab/show/Ab",
    },
    {
      title: "Wikipedia: Category of Abelian Groups",
      url: "https://en.wikipedia.org/wiki/Category_of_abelian_groups",
    },
  ],
};

export default abData;

