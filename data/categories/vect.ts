import { CategoryId, Feature } from "@/types/enums";
import type { Category } from "../index";

export const vectData: Category = {
  id: CategoryId.VECT,
  name: "Vect",
  description: "The category of vector spaces over a field and linear maps.",
  features: [
    Feature.ABELIAN,
    Feature.ADDITIVE,
    Feature.MONOIDAL,
    Feature.ENRICHED,
  ],
  links: [
    {
      title: "nLab: Vect",
      url: "https://ncatlab.org/nlab/show/Vect",
    },
    {
      title: "Wikipedia: Category of Vector Spaces",
      url: "https://en.wikipedia.org/wiki/Category_of_vector_spaces",
    },
  ],
};

export default vectData;

