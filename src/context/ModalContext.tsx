"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import ProposalModal from "@/components/ui/ProposalModal";

interface ModalContextType {
  openProposalModal: () => void;
  closeProposalModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  const openProposalModal = () => setIsProposalModalOpen(true);
  const closeProposalModal = () => setIsProposalModalOpen(false);

  return (
    <ModalContext.Provider value={{ openProposalModal, closeProposalModal }}>
      {children}
      <ProposalModal isOpen={isProposalModalOpen} onClose={closeProposalModal} />
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
