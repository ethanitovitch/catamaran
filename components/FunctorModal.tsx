"use client";

import { Functor } from "@/data";

interface FunctorModalProps {
  functor: Functor | null;
  onClose: () => void;
}

export default function FunctorModal({
  functor,
  onClose,
}: FunctorModalProps) {
  if (!functor) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                {functor.name}
              </h2>
              <p className="text-slate-500 mt-2 text-lg">
                Symbol: <span className="font-mono font-semibold">{functor.symbol}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 text-3xl leading-none transition-colors"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Description
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {functor.description}
              </p>
            </div>

            {functor.links.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Learn More
                </h3>
                <div className="space-y-2">
                  {functor.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {link.title} →
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
