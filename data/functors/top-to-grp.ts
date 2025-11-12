import { FunctorId, CategoryId } from "@/types/enums";
import type { Functor } from "../index";

export const topToGrpData: Functor = {
  id: FunctorId.TOP_TO_GRP,
  name: "π₁",
  source: CategoryId.TOP,
  target: CategoryId.GRP,
  description: "The fundamental group functor assigns to each pointed topological space its fundamental group, and to each continuous map the induced homomorphism on fundamental groups.",
  symbol: "π₁",
  links: [
    {
      title: "nLab: Fundamental Group",
      url: "https://ncatlab.org/nlab/show/fundamental+group",
    },
    {
      title: "Wikipedia: Fundamental Group",
      url: "https://en.wikipedia.org/wiki/Fundamental_group",
    },
  ],
};

export default topToGrpData;

