import { useFormContext } from "react-hook-form";
import { Input } from "../../Atomos/Input";
import { Label } from "../../Atomos/label";
import { cn } from "@/lib/utils";

type TextInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const TextInput = ({ name, label, placeholder }: TextInputProps) => {
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
        type="text"
        placeholder={placeholder}
        {...register(name)}
        className={cn(error && "border-red-500")}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};