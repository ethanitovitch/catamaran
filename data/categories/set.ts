import { CategoryId, Feature } from "@/types/enums";
import type { Category } from "../index";

export const setData: Category = {
  id: CategoryId.SET,
  name: "Set",
  description: "The category of sets and functions between them. Objects are sets, morphisms are functions.",
  features: [
    Feature.CARTESIAN_CLOSED,
    Feature.COMPLETE,
    Feature.TOPOS,
  ],
  links: [
    {
      title: "nLab: Set",
      url: "https://ncatlab.org/nlab/show/Set",
    },
    {
      title: "Wikipedia: Category of Sets",
      url: "https://en.wikipedia.org/wiki/Category_of_sets",
    },
  ],
};

export default setData;

