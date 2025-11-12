"use client";

import { useState, useMemo, useRef } from "react";
import { categories, functors, Category, Functor } from "@/data";
import { Feature } from "@/types/enums";
import GraphView, { GraphViewRef } from "@/components/GraphView";
import Sidebar from "@/components/Sidebar";
import CategoryModal from "@/components/CategoryModal";
import FunctorModal from "@/components/FunctorModal";

export default function Home() {
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedFunctor, setSelectedFunctor] = useState<Functor | null>(null);
  const graphViewRef = useRef<GraphViewRef>(null);

  const handleFeatureToggle = (feature: Feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  // Filter categories based on selected features
  const filteredCategories = useMemo(() => {
    if (selectedFeatures.length === 0) {
      return categories;
    }
    return categories.filter((cat) =>
      selectedFeatures.every((feature) => cat.features.includes(feature))
    );
  }, [selectedFeatures]);

  // Filter functors - only show edges between visible categories
  const filteredFunctors = useMemo(() => {
    const visibleCategoryIds = new Set(filteredCategories.map((c) => c.id));
    return functors.filter(
      (func) =>
        visibleCategoryIds.has(func.source) &&
        visibleCategoryIds.has(func.target)
    );
  }, [filteredCategories]);

  const handleCategorySelect = (category: Category) => {
    graphViewRef.current?.zoomToCategory(category.id);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        selectedFeatures={selectedFeatures}
        onFeatureToggle={handleFeatureToggle}
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />

      {/* Main Content - Graph View */}
      <main className="h-screen pt-20 pl-64">
        <div className="h-full">
          <GraphView
            ref={graphViewRef}
            categories={filteredCategories}
            functors={filteredFunctors}
            onCategoryClick={setSelectedCategory}
            onFunctorClick={setSelectedFunctor}
          />
        </div>
      </main>

      {/* Modals */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
      <FunctorModal
        functor={selectedFunctor}
        onClose={() => setSelectedFunctor(null)}
      />
    </>
  );
}
