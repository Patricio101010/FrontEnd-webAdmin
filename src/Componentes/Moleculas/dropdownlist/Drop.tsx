// src/components/molecules/dropdownlist/Drop.tsx
import { useState, useRef, useEffect } from "react";
import { Icon } from "../../Atomos/icon";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = {
  value: string | number;
  label: string;
};

type DropProps = {
  options: Option[];
  selected: Option | null;
  onSelect: (option: Option) => void;
  placeholder?: string;
};

export const Drop = ({
  options,
  selected,
  onSelect,
  placeholder = "Seleccione…",
}: DropProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cierra al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center justify-between w-48 px-3 py-2 border rounded bg-white hover:bg-gray-50"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{selected?.label ?? placeholder}</span>
        <Icon icon={ChevronDown} size={16} />
      </button>

      {open && (
        <ul className="absolute mt-1 w-48 bg-white border rounded shadow-md max-h-60 overflow-auto z-10">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={cn(
                "px-3 py-2 hover:bg-gray-100 cursor-pointer",
                selected?.value === opt.value && "bg-gray-200"
              )}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};