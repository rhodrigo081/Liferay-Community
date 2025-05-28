import { useState } from "react";
import { Bar, BarContainer, IconWrapper } from "./styles";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function SearchBar({ value, onChange }: any) {
  return (
    <BarContainer>
      <Bar
        type="search"
        placeholder="Buscar"
        value={value}
        onChange={onChange}
      />
      {value === "" && (
        <IconWrapper>
          <IoMdSearch />
        </IconWrapper>
      )}
    </BarContainer>
  );
}
