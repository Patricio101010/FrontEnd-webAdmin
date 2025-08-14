// src/components/molecules/input/AlphanumericInput.tsx
import { useFormContext } from "react-hook-form";
import { Input } from "../../Atomos/Input";
import { Label } from "../../Atomos/label";
import { cn } from "@/lib/utils";

type AlphanumericInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const AlphanumericInput = ({ name, label, placeholder }: AlphanumericInputProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name)}
        onInput={(e) => {
          const cleaned = (e.currentTarget.value || "").replace(/[^a-zA-Z0-9]/g, "");
          setValue(name, cleaned, { shouldValidate: true });
        }}
        className={cn(error && "border-red-500")}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};