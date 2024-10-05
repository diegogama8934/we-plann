interface Props {
  label:string
  placeholder:string
  value?: string
  onValueChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  className:string
  type?: "text" | "password" | "number"
}

export function Input({
  label,
  placeholder,
  value,
  onValueChange,
  name,
  className,
  type="text"
}:Props){


  return(
    <div className={`flex flex-col gap-1 ${className}`}>
      <label
        htmlFor={name}
        className="text-zinc-600"
      >
        {label}
      </label>
      <input 
        onChange={(e) => {if(onValueChange) onValueChange(e)}}
        value={value}
        className="py-2 px-3 border-zinc-200 border rounded-md shadow-sm focus-visible:outline-none"
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
      /> 
    </div>
  );
}