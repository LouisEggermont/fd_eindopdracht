"use client";
import { Dialog } from "@headlessui/react";
import { useRef } from "react";

export default function Modal({ onClose = () => {}, children }: { onClose?: () => void, children: React.ReactNode }) {
  let overlayRef = useRef();

  return (
    <Dialog
        static
        open={true}
        onClose={onClose}
        className="fixed inset-0 z-10 flex items-center justify-center"  
    >
        <Dialog.Overlay
            className="fixed inset-0 bg-black/50"
        />
        <div className="relative flex items-center justify-center w-5/6 sm:w-3/4 md:w-1/2">
            {children}
        </div>
    </Dialog>
  );
}