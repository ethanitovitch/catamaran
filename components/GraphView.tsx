"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import cytoscape, { Core, EdgeSingular, NodeSingular } from "cytoscape";
import { Category, Functor } from "@/data";

interface GraphViewProps {
  categories: Category[];
  functors: Functor[];
  onCategoryClick: (category: Category) => void;
  onFunctorClick: (functor: Functor) => void;
}

export interface GraphViewRef {
  zoomToCategory: (categoryId: string) => void;
}

const GraphView = forwardRef<GraphViewRef, GraphViewProps>(({
  categories,
  functors,
  onCategoryClick,
  onFunctorClick,
}, ref) => {
  const cyRef = useRef<Core | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    zoomToCategory: (categoryId: string) => {
      if (cyRef.current) {
        const node = cyRef.current.getElementById(categoryId);
        if (node.length > 0) {
          cyRef.current.animate({
            center: { eles: node },
            zoom: 2,
            duration: 500,
          });
        }
      }
    },
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    // Create nodes from categories
    const nodes = categories.map((cat) => ({
      data: {
        id: cat.id,
        label: cat.name,
        category: cat,
      },
    }));

    // Create edges from functors
    const edges = functors.map((func) => ({
      data: {
        id: func.id,
        source: func.source,
        target: func.target,
        label: func.symbol,
        functor: func,
      },
    }));

    // Initialize Cytoscape
    const cy = cytoscape({
      container: containerRef.current,
      elements: [...nodes, ...edges],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#3b82f6",
            label: "data(label)",
            "text-valign": "top",
            "text-halign": "center",
            "text-margin-y": -15,
            color: "#1e293b",
            "font-size": "16px",
            "font-weight": "700",
            width: 50,
            height: 50,
            "border-width": 3,
            "border-color": "#1e40af",
          },
        },
        {
          selector: "node:hover",
          style: {
            "background-color": "#2563eb",
            "border-color": "#1e3a8a",
            cursor: "pointer",
            width: 55,
            height: 55,
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#94a3b8",
            "target-arrow-color": "#94a3b8",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
            label: "data(label)",
            "font-size": "14px",
            "text-rotation": "autorotate",
            "text-margin-y": -12,
            color: "#475569",
            "font-weight": "600",
          },
        },
        {
          selector: "edge:hover",
          style: {
            "line-color": "#3b82f6",
            "target-arrow-color": "#3b82f6",
            cursor: "pointer",
            width: 4,
          },
        },
      ],
      layout: {
        name: "grid",
        rows: 2,
        cols: 3,
        padding: 80,
      },
    });

    cyRef.current = cy;

    // Add click handlers
    cy.on("tap", "node", (evt) => {
      const node = evt.target as NodeSingular;
      const category = node.data("category") as Category;
      onCategoryClick(category);
    });

    cy.on("tap", "edge", (evt) => {
      const edge = evt.target as EdgeSingular;
      const functor = edge.data("functor") as Functor;
      onFunctorClick(functor);
    });

    return () => {
      cy.destroy();
    };
  }, [categories, functors, onCategoryClick, onFunctorClick]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background:
          "linear-gradient(90deg, #f1f5f9 1px, transparent 1px), linear-gradient(#f1f5f9 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
});

GraphView.displayName = "GraphView";

export default GraphView;
