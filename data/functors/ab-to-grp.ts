import { FunctorId, CategoryId } from "@/types/enums";
import type { Functor } from "../index";

export const abToGrpData: Functor = {
  id: FunctorId.AB_TO_GRP,
  name: "Forgetful",
  source: CategoryId.AB,
  target: CategoryId.GRP,
  description: "The forgetful functor from Ab to Grp, which is simply the inclusion of abelian groups into groups.",
  symbol: "U",
  links: [
    {
      title: "nLab: Forgetful Functor",
      url: "https://ncatlab.org/nlab/show/forgetful+functor",
    },
  ],
};

export default abToGrpData;

