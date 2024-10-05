interface Props {
  label:string
  placeholder:string
  value?: string
  onValueChange?: () => void
  name?: string
}

export function Input({
  label,
  placeholder,
  value,
  onValueChange,
  name
}:Props){


  return(
    <div className="flex flex-col gap-1">
      
      <label
        htmlFor={name}
        className="text-zinc-600"
      >
        {label}
      </label>
      
      <input 
        onChange={onValueChange}
        value={value}
        className="py-2 px-3 border-zinc-200 border rounded-md shadow-sm focus-visible:outline-none"
        placeholder={placeholder}
        name={name}
        id={name}
      />
 
    </div>
  );
}