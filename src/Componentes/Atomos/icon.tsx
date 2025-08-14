import { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export const Icon = ({ icon: IconComponent, size = 20, className }: IconProps) => {
  return <IconComponent size={size} className={className} />;
};