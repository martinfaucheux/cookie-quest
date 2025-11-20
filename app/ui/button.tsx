import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "p-2 rounded cursor-pointer transition duration-300 border text-amber-900 bg-white border-orange-900 hover:bg-orange-200",
        className
      )}
    >
      {children}
    </button>
  );
}
