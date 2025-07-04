import React from "react";

// --- Main Loading Page Component ---
function Loading() {
  // Style component for custom animations
  const CustomStyles = () => (
    <style>{`
            @keyframes pulse-dot {
                0%, 100% {
                    transform: scale(0.8);
                    opacity: 0.8;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 1;
                }
            }
            @keyframes pulse-ring {
                0% {
                    transform: scale(0.5);
                    opacity: 0.8;
                }
                80%, 100% {
                    transform: scale(2.5);
                    opacity: 0;
                }
            }
            .animate-pulse-dot {
                animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            .animate-pulse-ring {
                animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
        `}</style>
  );

  return (
    <>
      <CustomStyles />
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 text-gray-800">
        <div className="relative flex items-center justify-center w-32 h-32">
          {/* Pulsing Rings */}
          <div className="absolute w-full h-full rounded-full border-2 border-green-300 animate-pulse-ring"></div>
          <div
            className="absolute w-full h-full rounded-full border-2 border-green-300 animate-pulse-ring"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-2 border-green-300 animate-pulse-ring"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Central Dot */}
          <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse-dot"></div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
          <p className="mt-2 text-gray-500">
            Preparing the digital experience.
          </p>
        </div>
      </div>
    </>
  );
}
export default Loading;
