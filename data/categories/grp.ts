import { CategoryId, Feature } from "@/types/enums";
import type { Category } from "../index";

export const grpData: Category = {
  id: CategoryId.GRP,
  name: "Grp",
  description: "The category of groups and group homomorphisms. Objects are groups, morphisms are homomorphisms.",
  features: [
    Feature.COMPLETE,
    Feature.MONOIDAL,
  ],
  links: [
    {
      title: "nLab: Grp",
      url: "https://ncatlab.org/nlab/show/Grp",
    },
    {
      title: "Wikipedia: Category of Groups",
      url: "https://en.wikipedia.org/wiki/Category_of_groups",
    },
  ],
};

export default grpData;

