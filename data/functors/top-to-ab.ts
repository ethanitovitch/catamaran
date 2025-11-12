import { FunctorId, CategoryId } from "@/types/enums";
import type { Functor } from "../index";

export const topToAbData: Functor = {
  id: FunctorId.TOP_TO_AB,
  name: "H₁",
  source: CategoryId.TOP,
  target: CategoryId.AB,
  description: "The first homology functor assigns to each topological space its first homology group (which is abelian), and to each continuous map the induced homomorphism.",
  symbol: "H₁",
  links: [
    {
      title: "nLab: Homology",
      url: "https://ncatlab.org/nlab/show/homology",
    },
    {
      title: "Wikipedia: Homology",
      url: "https://en.wikipedia.org/wiki/Homology_(mathematics)",
    },
  ],
};

export default topToAbData;

