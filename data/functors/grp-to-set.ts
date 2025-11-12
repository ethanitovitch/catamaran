import { FunctorId, CategoryId } from "@/types/enums";
import type { Functor } from "../index";

export const grpToSetData: Functor = {
  id: FunctorId.GRP_TO_SET,
  name: "Forgetful",
  source: CategoryId.GRP,
  target: CategoryId.SET,
  description: "The forgetful functor from Grp to Set forgets the group structure, mapping a group to its underlying set and a homomorphism to its underlying function.",
  symbol: "U",
  links: [
    {
      title: "nLab: Forgetful Functor",
      url: "https://ncatlab.org/nlab/show/forgetful+functor",
    },
  ],
};

export default grpToSetData;

