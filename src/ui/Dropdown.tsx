import React from "react";

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
        <div className="absolute w-full p-1 rounded-lg top-12 flex flex-col gap-1 border-zinc-100 border shadow bg-white">
          {options.map((opt, i, arr) => (
            <React.Fragment key={i}>
              {opt}
              {i == (arr.length - 1) ? <></> : <span className="w-full bg-zinc-100 h-[1px]"></span>}
            </React.Fragment>
          ))}
        </div>
      )}

    </div>
  );
}