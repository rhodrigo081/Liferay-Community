import styled from "styled-components";

// Defina HiddenRadio AQUI antes de StyledRadio
export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  // Oculta visualmente o input de rádio nativo, mas o mantém acessível
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const FilterContainer = styled.div`
  // ... (seu código existente) ...
`;

export const StyledRadio = styled.div<{ isChecked: boolean }>`
  display: inline-block;
  background: ${(props) => (props.isChecked ? "#0c70f2" : "none")};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  border: 1px solid;
  margin-right: 8px;

  ${HiddenRadio}:focus + & { // Agora HiddenRadio é reconhecido
    box-shadow: 0 0 0 2px cornflowerblue;
  }
  cursor: pointer;
`;

export const Checkmark = styled.svg<{ isVisible: boolean }>`
<<<<<<< HEAD
  // ... (seu código existente) ...
=======
  display: block;
  fill: none;
  stroke: white;
  stroke-width: 3px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")}; 
>>>>>>> 878aaedc7bb223c33c793d0a9fe20e689453eb33
`;