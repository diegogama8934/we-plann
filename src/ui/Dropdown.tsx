interface Props {
  isOpen: boolean
  trigger: React.ReactNode
  options: React.ReactNode[]
}


export function Dropdown({ isOpen, trigger, options }: Props) {


  return (
    <div className="relative">

      {trigger}

      {isOpen && (
        <div className="absolute w-full p-1 rounded-lg top-12 flex flex-col gap-1 border-zinc-100 border shadow-sm bg-white">
          {options.map((opt, i, arr) => (
            <>
              {opt}
              {i == (arr.length - 1) ? <></> : <span className="w-full bg-zinc-100 h-[1px]"></span>}
            </>
          ))}
        </div>
      )}

    </div>
  );
}