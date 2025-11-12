// This file aggregates all categories and functors from their individual files

import { CategoryId, FunctorId, Feature } from "@/types/enums";
import setData from "./categories/set";
import grpData from "./categories/grp";
import abData from "./categories/ab";
import topData from "./categories/top";
import vectData from "./categories/vect";

import grpToSetData from "./functors/grp-to-set";
import abToGrpData from "./functors/ab-to-grp";
import topToGrpData from "./functors/top-to-grp";
import topToAbData from "./functors/top-to-ab";
import vectToAbData from "./functors/vect-to-ab";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  features: Feature[];
  links: Array<{
    title: string;
    url: string;
  }>;
}

export interface Functor {
  id: FunctorId;
  name: string;
  source: CategoryId;
  target: CategoryId;
  description: string;
  symbol: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

export const categories: Category[] = [
  setData,
  grpData,
  abData,
  topData,
  vectData,
];

export const functors: Functor[] = [
  grpToSetData,
  abToGrpData,
  topToGrpData,
  topToAbData,
  vectToAbData,
];

// Get all unique features across all categories
export const allFeatures = Object.values(Feature);
