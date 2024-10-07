interface Props {
  children: React.ReactNode
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  isLoading?: boolean
  className?: string
  type?: "submit" | "button"
  variant?: "primary" | "secondary" | "tertiary"
  onClick?: () => void
}

export function Button({ children, type = "button", isLoading = false, onClick, className, variant = "primary", endIcon, startIcon }: Props) {

  let variantClassName: string = "";

  switch (variant) {
    case "primary":
      variantClassName = "bg-blue-600 border-none text-white rounded-md shadow-sm transition-all";
      break;
    case "secondary":
      variantClassName = "border-zinc-200 border text-zinc-600 rounded-md shadow-sm transition-all";
      break;
    case "tertiary":
      variantClassName = "text-zinc-600 hover:bg-zinc-200 rounded-md transition-all";
      break;
  }

  return (
    <button
      type={type}
      className={`${variantClassName} ${className} flex gap-4 px-6 py-2`}
      onClick={onClick}
    >
      {startIcon}
      <span>{isLoading ? "Loading..." : children}</span>
      {endIcon}
    </button>
  );
}