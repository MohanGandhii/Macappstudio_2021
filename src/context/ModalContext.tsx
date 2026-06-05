"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FiX } from "react-icons/fi";

interface ModalContextType {
  openProposalModal: () => void;
  closeProposalModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openProposalModal = () => setIsOpen(true);
  const closeProposalModal = () => setIsOpen(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ openProposalModal, closeProposalModal }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center bg-black/85 backdrop-blur-sm">
          {/* White Modal Container */}
          <div className="relative w-full max-w-[1360px] mx-auto h-[100dvh] sm:h-[92vh] lg:h-[88vh] bg-white rounded-none sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl animate-scale-in flex flex-col pt-0 pb-0">

            {/* X close button */}
            <button
              onClick={closeProposalModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5 z-[10000] p-2 sm:p-2.5 bg-gray-900 hover:bg-black rounded-full text-white transition-all duration-200 active:scale-95 hover:scale-105 flex-shrink-0"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Iframe: set to h-full and scrolling="yes" to scroll natively inside the modal */}
            <iframe
              src="https://tally.so/r/xXyRrd"
              className="w-full h-full border-0"
              title="Get a Proposal"
              scrolling="yes"
            />
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
