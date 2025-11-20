import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariants = {
  primary:
    "text-white bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700",
  secondary:
    "text-amber-900 bg-orange-100 border-orange-300 hover:bg-orange-200 hover:border-orange-400",
  danger:
    "text-white bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700",
  outline: "text-amber-900 bg-white border-orange-900 hover:bg-orange-200",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  children,
  className,
  variant = "outline",
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded cursor-pointer transition duration-300 border font-medium",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}
