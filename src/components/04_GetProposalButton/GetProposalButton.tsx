"use client";

import { useModal } from "@/context/ModalContext";
import clsx from "clsx";

interface GetProposalButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GetProposalButton({ className, children = "Get a Proposal" }: GetProposalButtonProps) {
  const { openProposalModal } = useModal();

  return (
    <button 
      onClick={openProposalModal}
      className={clsx(className)}
    >
      {children}
    </button>
  );
}
