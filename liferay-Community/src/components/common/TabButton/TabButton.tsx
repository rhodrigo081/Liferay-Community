import React from "react";
import { StyledTabButton } from "./styles";

interface TabButtonProps {
  isActive?: boolean;
  onClick?: () => void; // Certifique-se que esta prop está aqui
  children: React.ReactNode;
}

export function TabButton({
  isActive = false,
  onClick,
  children,
}: TabButtonProps) {
  // O onClick é passado diretamente para o StyledTabButton, que é um <button>
  return (
    <StyledTabButton isActive={isActive} onClick={onClick}>
      {children}
    </StyledTabButton>
  );
}
