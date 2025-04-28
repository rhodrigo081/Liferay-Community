import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 20rem;
  top: 4.5rem;
  right: 2.75rem;
  background: ${(props) => props.theme.header.profile.background};
  padding: 0.5rem 0;
  z-index: 100;
  border-radius: 0 0 20px 20px;
`;

export const DropdownItem = styled.li`
  list-style: none;
  color: ${(props) => props.theme.icon};
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: ${(props) => props.theme.hoverIcon};
    transition: all 0.3s ease-in;
  }

  &.danger{
    color: ${(props) => props.theme.danger};

    &:hover{
      color: ${(props) => props.theme.hoverdanger};
    }
  }
`;