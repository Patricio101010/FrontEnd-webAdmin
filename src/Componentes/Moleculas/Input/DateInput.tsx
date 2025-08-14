// src/components/molecules/input/DateInput.tsx
import { useFormContext } from "react-hook-form";
import { Input } from "../../Atomos/Input";
import { Label } from "../../Atomos/label";
import { Icon } from "../../Atomos/icon";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

type DateInputProps = {
  name: string;
  label: string;
  min?: string;     // formato YYYY-MM-DD
  max?: string;     // formato YYYY-MM-DD
};

export const DateInput = ({ name, label, min, max }: DateInputProps) => { 
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <Input
          id={name}
          type="date"
          min={min}
          max={max}
          {...register(name)}
          className={cn("pr-10", error && "border-red-500")}
        />
        <Icon
          icon={Calendar}
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
