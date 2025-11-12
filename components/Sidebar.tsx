"use client";

import { allFeatures, Category } from "@/data";
import { Feature } from "@/types/enums";
import { useState, useMemo } from "react";

interface SidebarProps {
  selectedFeatures: Feature[];
  onFeatureToggle: (feature: Feature) => void;
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

export default function Sidebar({
  selectedFeatures,
  onFeatureToggle,
  categories,
  onCategorySelect,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const formatFeatureName = (feature: Feature) => {
    return feature
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query)
    );
  }, [categories, searchQuery]);

  return (
    <aside className="fixed left-0 top-20 bottom-0 bg-white border-r border-slate-200 shadow-sm z-40 w-64">
      <div className="p-6 h-full overflow-y-auto flex flex-col">
          {/* Search */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">
              Search Categories
            </h2>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {filteredCategories.length > 0 && (
              <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategorySelect(category)}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded transition-colors"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
            {searchQuery && filteredCategories.length === 0 && (
              <p className="mt-2 text-xs text-slate-500">No categories found</p>
            )}
          </div>

          {/* Features */}
          <div className="flex-1">
            <h2 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">
              Filters
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Filter by features
            </p>
            <div className="space-y-2.5">
              {allFeatures.map((feature) => (
                <label
                  key={feature}
                  className="flex items-center space-x-2.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => onFeatureToggle(feature)}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    {formatFeatureName(feature)}
                  </span>
                </label>
              ))}
            </div>
            {selectedFeatures.length > 0 && (
              <button
                onClick={() => selectedFeatures.forEach(onFeatureToggle)}
                className="mt-4 w-full px-3 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Clear All ({selectedFeatures.length})
              </button>
            )}
          </div>
        </div>
      </aside>
  );
}
