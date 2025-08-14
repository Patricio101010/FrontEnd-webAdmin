import { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
};

export const Label = ({
  children,
  htmlFor,
  required = false,
  className = "",
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};