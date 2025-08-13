import { useState } from "react";

interface DropdownMenuProps {
  items: string[];
  isOpen: boolean;
  onClose: () => void;
  onItemSelect?: (item: string) => void;
}

const DropdownMenu = ({ items, isOpen, onClose, onItemSelect }: DropdownMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleItemSelect = (item: string) => {
    if (onItemSelect) {
      onItemSelect(item);
    }
    onClose();
  };

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 max-h-72 overflow-y-auto"
    >
      {items.map((item, index) => (
        <button
          key={index}
          className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200 flex items-center group ${
            hoveredItem === item
              ? "text-primary bg-primary/5 border-l-2 border-primary"
              : "text-gray-700 hover:text-primary hover:bg-gray-50"
          }`}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => handleItemSelect(item)}
        >
          <span className="flex-1">{item}</span>
          <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            hoveredItem === item 
              ? "bg-primary opacity-100" 
              : "bg-gray-300 opacity-0 group-hover:opacity-100"
          }`}></div>
        </button>
      ))}
    </div>
  );
};

export default DropdownMenu; 