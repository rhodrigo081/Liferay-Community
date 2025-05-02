import { DropdownContainer, DropdownItem } from "./styles";

interface Option {
  label: string;
  icon: React.ReactNode;
  isDanger?: boolean;
  onClick: () => void;
}

interface DropdownProps {
  options: Option[];
}

// O dev pode escolher as opções do Dropdown dependendo da sua finalidade
export function Dropdown({ options }: DropdownProps) {

  return (
    <DropdownContainer>
         <ul>
        {options.map((option, index) => (
          <DropdownItem key={index} className={option.isDanger ? "danger" : ""} onClick={option.onClick}>
            {option.icon} {option.label}
          </DropdownItem>
        ))}
      </ul>
    </DropdownContainer>
  );
}
