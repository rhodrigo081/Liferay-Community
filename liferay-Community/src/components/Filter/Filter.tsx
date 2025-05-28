import { FaFilter } from "react-icons/fa";
import { FilterContainer,  StyledRadio, Checkmark } from "./styles";

interface FilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Filter({ selectedCategory, onCategoryChange }: FilterProps) {
  const categories: string[] = [
    "Esportes",
    "Jogos",
    "Leitura e Ensino",
    "Voluntariado",
    "Música",
    "Trabalho",
  ];

  return (
    <FilterContainer>
      <h2>
        <FaFilter />
        Filtros
      </h2>
      <ul>
        <h3>Por Categoria</h3>
        {categories.map((category) => {
          const id = `radio-${category}`;
          const isChecked = selectedCategory === category;

          return (
            <li key={category}>
              <label htmlFor={id} onClick={() => onCategoryChange(isChecked ? "" : category)}>
                <StyledRadio isChecked={isChecked}>
                  <Checkmark viewBox="0 0 24 24" isVisible={isChecked}>
                    <polyline points="20 6 9 17 4 12" />
                  </Checkmark>
                </StyledRadio>
                <span>{category}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </FilterContainer>
  );
}
