import { FaFilter } from "react-icons/fa";
import {
  FilterContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Checkmark,
} from "./styles";

export function Filter() {
  return (
    <FilterContainer>
      <h2>
        <FaFilter />
        Filtros
      </h2>
      <ul>
        <h3>Por Categoria</h3>
        <li>
          <label>
            <HiddenCheckbox />
            <StyledCheckbox>
              <Checkmark viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Checkmark>
            </StyledCheckbox>
            <span>Esportes</span>
          </label>
        </li>
        <li>
          <label>
            <HiddenCheckbox />
            <StyledCheckbox>
              <Checkmark viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Checkmark>
            </StyledCheckbox>
            <span>Jogos</span>
          </label>
        </li>
        <li>
          <label>
            <HiddenCheckbox />
            <StyledCheckbox>
              <Checkmark viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Checkmark>
            </StyledCheckbox>
            <span>Leitura e Ensino</span>
          </label>
        </li>
        <li>
          <label>
            <HiddenCheckbox />
            <StyledCheckbox>
              <Checkmark viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Checkmark>
            </StyledCheckbox>
            <span>Voluntariado</span>
          </label>
        </li>
        <li>
          <label>
            <HiddenCheckbox />
            <StyledCheckbox>
              <Checkmark viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Checkmark>
            </StyledCheckbox>
            <span>Música</span>
          </label>
        </li>
        <li>
          <label>
            <HiddenCheckbox />
            <StyledCheckbox>
              <Checkmark viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Checkmark>
            </StyledCheckbox>
            <span>Trabalho</span>
          </label>
        </li>
      </ul>
    </FilterContainer>
  );
}
