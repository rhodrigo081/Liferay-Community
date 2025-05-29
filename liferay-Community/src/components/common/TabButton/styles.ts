import styled from "styled-components";

export const StyledTabButton = styled.button<{ isActive?: boolean }>`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: none;
  color: ${(props) => props.theme.text};
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${(props) =>
    props.isActive &&
    `
    color: ${props.theme.navLine};
    border-bottom-color: ${props.theme.navLine};
  `}

  &:hover {
    color: ${(props) => props.theme.navLine};
  }
`;
