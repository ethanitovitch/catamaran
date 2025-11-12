import { FunctorId, CategoryId } from "@/types/enums";
import type { Functor } from "../index";

export const vectToAbData: Functor = {
  id: FunctorId.VECT_TO_AB,
  name: "Forgetful",
  source: CategoryId.VECT,
  target: CategoryId.AB,
  description: "The forgetful functor from Vect to Ab forgets the scalar multiplication, viewing a vector space as just an abelian group under addition.",
  symbol: "U",
  links: [
    {
      title: "nLab: Forgetful Functor",
      url: "https://ncatlab.org/nlab/show/forgetful+functor",
    },
  ],
};

export default vectToAbData;

