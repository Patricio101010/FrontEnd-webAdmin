// src/components/molecules/input/NumericInput.tsx
import { useFormContext } from "react-hook-form";
import { Input } from "../../Atomos/Input";
import { Label } from "../../Atomos/label";
import { cn } from "@/lib/utils";

type NumericInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  step?: number;
  min?: number;
  max?: number;
};

export const NumericInput = ({
  name,
  label,
  placeholder,
  step = 1,
  min,
  max,
}: NumericInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="number"
        step={step}
        min={min}
        max={max}
        placeholder={placeholder}
        {...register(name, { valueAsNumber: true })}
        className={cn(error && "border-red-500")}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};