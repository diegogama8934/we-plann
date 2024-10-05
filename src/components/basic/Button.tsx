
interface Props {
  children:React.ReactNode
  type?: "submit" | "button"
  isLoading?: boolean
  onClick?: () => void
  className?: string
  variant: "primary" | "secondary" | "tertiary"
}

export function Button({children, type="button", isLoading=false, onClick, className, variant}:Props){

  let variantClassName:string="";

  switch (variant) {
    case "primary":
      variantClassName= "bg-blue-600 border-none text-white w-fit px-6 py-2 rounded-md shadow-sm transition-all";
      break;
    case "secondary":
      variantClassName= "border-zinc-200 border text-zinc-600 w-fit px-6 py-2 rounded-md shadow-sm transition-all";
      break;
    case "tertiary":
      variantClassName= "text-zinc-600 hover:bg-zinc-100 px-6 py-2 rounded-md transition-all";
      break;
  }

  return(
    <button 
      type={type}
      className={`${variantClassName} ${className}`}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}