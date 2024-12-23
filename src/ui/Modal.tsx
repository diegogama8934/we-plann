"use client";
import { AiOutlineClose } from "react-icons/ai";


interface ModalProps {
  title: string
  body: React.ReactNode
  footer: React.ReactNode
}

export function Modal({ title, body, footer }: ModalProps) {


  return (
    <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0">
      <div className="absolute top-0 left-0 bg-black/50 z-10 h-screen w-screen"></div>

      <div className="flex flex-col gap-4 w-[600px] h-fit max-h-[600px] bg-white z-20 rounded py-4 px-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{title}</span>
          <button className="p-2"><AiOutlineClose /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto">
          {body}
        </div>

        {/* Footer */}
        <div>
          {footer}
        </div>

      </div>

    </div>
  );
}