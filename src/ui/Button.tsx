import Link from "next/link"

interface Props {
  children: React.ReactNode
  className?: string
  endIcon?: React.ReactNode
  href?: string
  isIconOnly?: boolean
  isLoading?: boolean
  onClick?: () => void
  startIcon?: React.ReactNode
  type?: "submit" | "button"
  useAsLink?: boolean
  variant?: "primary" | "secondary" | "tertiary"
  color?: "brand" | "warning" | "danger"
}

export function Button({
  children,
  className,
  endIcon,
  href,
  isIconOnly = false,
  isLoading = false,
  onClick,
  startIcon,
  type = "button",
  useAsLink = false,
  variant = "primary",
  // color = "brand"
}: Props) {

  let variantClassName: string = "";

  switch (variant) {
    case "primary":
      variantClassName = "bg-blue-600 border-none text-white rounded-md shadow-sm transition-all";
      break;
    case "secondary":
      variantClassName = "border-zinc-200 border text-zinc-600 rounded-md shadow-sm transition-all";
      break;
    case "tertiary":
      variantClassName = "text-zinc-600 hover:bg-zinc-100 rounded-md transition-all";
      break;
  }

  if (useAsLink) {
    return (
      <Link
        href={href!}
        type={type}
        className={`${variantClassName} ${className} ${isIconOnly ? "p-1" : "px-4 py-2"} flex gap-4`}
        onClick={onClick}
      >
        {!isIconOnly && startIcon}
        <span>{isLoading ? "Loading..." : children}</span>
        {!isIconOnly && endIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${variantClassName} ${className} ${isIconOnly ? "p-1" : "px-4 py-2"} flex gap-4`}
      onClick={onClick}
    >
      {!isIconOnly && startIcon}
      <span>{isLoading ? "Loading..." : children}</span>
      {!isIconOnly && endIcon}
    </button>
  );
}