import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  height: 100%;
  padding: 0 2rem;
  gap: 2rem;
  margin-left: 1rem;

  h2,
  h3 {
    color: ${(props) => props.theme.title};
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.text};
    }
  }
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  background: none;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  border: 1px solid;
  margin-right: 8px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px cornflowerblue;
  }

  svg {
    fill: none;
    stroke: white;
    stroke-width: 3px;
    visibility: hidden;
  }

  ${HiddenCheckbox}:checked + & {
    background: #0c70f2;
    svg {
      visibility: visible;
    }
  }
`;
export const Checkmark = styled.svg`
  display: block;
`;
