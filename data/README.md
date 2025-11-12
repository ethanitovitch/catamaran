# Catamaran Data Structure

This directory contains all the categories and functors that make up the Catamaran graph.

## Contributing

### Adding a New Category

1. Create a new TypeScript file in `data/categories/` with the category id as the filename (e.g., `ring.ts`)
2. Add the new category ID to the `CategoryId` enum in `types/enums.ts`
3. Follow this structure:

```typescript
import { CategoryId, Feature } from "@/types/enums";
import type { Category } from "../index";

export const ringData: Category = {
  id: CategoryId.RING,
  name: "Ring",
  description: "A brief description of the category",
  features: [
    Feature.ABELIAN,
    Feature.ADDITIVE,
  ],
  links: [
    {
      title: "nLab: Ring",
      url: "https://ncatlab.org/nlab/show/Ring",
    },
  ],
};

export default ringData;
```

4. Import and add it to the `categories` array in `data/index.ts`

### Adding a New Functor

1. Create a new TypeScript file in `data/functors/` with a descriptive filename (e.g., `ring-to-ab.ts`)
2. Add the new functor ID to the `FunctorId` enum in `types/enums.ts`
3. Follow this structure:

```typescript
import { FunctorId, CategoryId } from "@/types/enums";
import type { Functor } from "../index";

export const ringToAbData: Functor = {
  id: FunctorId.RING_TO_AB,
  name: "Forgetful",
  source: CategoryId.RING,
  target: CategoryId.AB,
  description: "A description of what this functor does",
  symbol: "U",
  links: [
    {
      title: "Reference",
      url: "https://example.com",
    },
  ],
};

export default ringToAbData;
```

4. Import and add it to the `functors` array in `data/index.ts`

### Adding a New Feature

If you need to add a new structural feature:

1. Add it to the `Feature` enum in `types/enums.ts`
2. Use it in your category TypeScript files

### Available Features

Current features (defined in `types/enums.ts`):
- `abelian` - Abelian categories
- `additive` - Additive categories
- `cartesian-closed` - Cartesian closed categories
- `complete` - Complete categories
- `enriched` - Enriched categories
- `monoidal` - Monoidal categories
- `topos` - Toposes

### Type Safety

This project uses TypeScript enums for better type safety:
- **CategoryId**: All valid category IDs
- **FunctorId**: All valid functor IDs
- **Feature**: All valid features

When adding new data, make sure to update these enums first!
