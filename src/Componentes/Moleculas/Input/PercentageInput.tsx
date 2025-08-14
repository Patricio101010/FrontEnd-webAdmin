// src/components/molecules/input/PercentageInput.tsx
import { useFormContext } from "react-hook-form";
import { Input } from "../../Atomos/Input";
import { Label } from "../../Atomos/label";
import { cn } from "@/lib/utils";

type PercentageInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const PercentageInput = ({ name, label, placeholder }: PercentageInputProps) => {
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
          type="number"
          step={0.01}
          min={0}
          max={100}
          placeholder={placeholder}
          {...register(name, { valueAsNumber: true })}
          className={cn("pr-8", error && "border-red-500")}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};