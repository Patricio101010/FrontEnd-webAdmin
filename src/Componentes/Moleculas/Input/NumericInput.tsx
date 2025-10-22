import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { NumericInputProps } from "../../../types/Numeros/NumericInputProps";
import { Input } from "../../Atomos/Input";
import { Label } from "../../Atomos/label";

export const NumericInput = ({
  name,
  label,
  placeholder,
  step = 1
}: NumericInputProps) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="number"
        step={step}
        placeholder={placeholder}
        {...register(name, { valueAsNumber: true })}
        className={cn(error && "border-red-500")}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
