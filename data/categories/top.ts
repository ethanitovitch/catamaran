import { CategoryId, Feature } from "@/types/enums";
import type { Category } from "../index";

export const topData: Category = {
  id: CategoryId.TOP,
  name: "Top",
  description: "The category of topological spaces and continuous maps.",
  features: [
    Feature.COMPLETE,
    Feature.CARTESIAN_CLOSED,
  ],
  links: [
    {
      title: "nLab: Top",
      url: "https://ncatlab.org/nlab/show/Top",
    },
    {
      title: "Wikipedia: Category of Topological Spaces",
      url: "https://en.wikipedia.org/wiki/Category_of_topological_spaces",
    },
  ],
};

export default topData;

