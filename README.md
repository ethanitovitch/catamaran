# Catamaran 🚤

An interactive graph explorer of category theory. Navigate the beautiful landscape of mathematical categories and the functors that connect them.

## Features

- **Interactive Graph Visualization**: Click on categories to learn about them, hover over edges to see functors
- **Feature-Based Filtering**: Filter categories by their structural properties (abelian, monoidal, complete, etc.)
- **Modular Data Structure**: Each category and functor is its own file for easy contributions
- **Clean, Minimal Design**: Focus on the mathematics with an elegant, distraction-free interface

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
catamaran/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main application page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── GraphView.tsx      # Cytoscape graph visualization
│   ├── Sidebar.tsx        # Feature filter sidebar
│   ├── CategoryModal.tsx  # Category detail modal
│   └── FunctorModal.tsx   # Functor detail modal
└── data/                  # Data structure (easy for PRs!)
    ├── categories/        # Individual category JSON files
    ├── functors/          # Individual functor JSON files
    ├── index.ts          # Data aggregation
    └── README.md         # Contribution guide
```

## Contributing

Want to add a category or functor? Check out [`data/README.md`](./data/README.md) for a complete guide!

Each category and functor is just a simple JSON file, making it easy to contribute via pull requests.

## Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **Cytoscape.js** - Graph visualization
- **TypeScript** - Type safety

## Current Categories

- **Set** - Sets and functions
- **Grp** - Groups and homomorphisms
- **Ab** - Abelian groups
- **Top** - Topological spaces
- **Vect** - Vector spaces

More coming soon!

## License

MIT
