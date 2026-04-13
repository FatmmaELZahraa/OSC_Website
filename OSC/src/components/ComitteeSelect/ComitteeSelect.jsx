import React, { useState } from "react";

const ALL_COMMITTEES = {
  Technical: [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "science and tech", name: "Science and Tech" },
    { id: "linux", name: "Linux" },
    { id: "game development", name: "Game Development" },
    { id: "flutter", name: "Flutter" },
  ],
  Creative: [
    { id: "media", name: "Media" },
    { id: "uiux", name: "UI/UX" },
    { id: "blender", name: "Blender" },
  ],
  "Non-Technical": [
    { id: "hr", name: "HR" },
    { id: "pr", name: "PR" },
  ],
};

const CustomSelect = ({ onSelect, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  // If options prop is provided, filter ALL_COMMITTEES down to only available ones.
  // If no options prop, show everything (original static behaviour).
  const committees = options
    ? Object.fromEntries(
        Object.entries(ALL_COMMITTEES)
          .map(([group, items]) => [
            group,
            items.filter((item) => options.includes(item.id)),
          ])
          .filter(([, items]) => items.length > 0),
      )
    : ALL_COMMITTEES;

  const handleSelect = (name) => {
    setSelected(name);
    setIsOpen(false);
    if (onSelect) onSelect(name);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex justify-between items-center bg-white shadow-sm
          ${isOpen ? "border-[#FA9B46] ring-4 ring-[#FA9B46]/10" : "border-[#FA9B46]/30"}`}
      >
        <span className={selected ? "text-gray-700" : "text-gray-400"}>
          {selected || "Select Committee"}
        </span>
        <svg
          className={`fill-current h-4 w-4 text-[#FA9B46] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white/90 backdrop-blur-md border-2 border-[#FA9B46]/20 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {Object.entries(committees).map(([group, items]) => (
              <div key={group}>
                <div className="px-5 py-2 text-xs font-bold text-[#FA9B46] bg-[#FFF8E7]/50 uppercase tracking-wider">
                  {group}
                </div>
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.name)}
                    className="px-5 py-2.5 hover:bg-[#FA9B46]/10 cursor-pointer text-gray-700 transition-colors duration-150 first:pt-3"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <input type="hidden" name="committee" value={selected} />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fa9b46;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CustomSelect;
