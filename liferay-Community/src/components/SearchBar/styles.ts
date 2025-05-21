import styled from "styled-components";

export const BarContainer = styled.div`
  border: 1px solid ${(props) => props.theme.searchBar};
  border-radius: 12px;
  width: 22rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Bar = styled.input.attrs({ type: "search" })`
  border: none;
  background: none;
  color: ${(props) => props.theme.text};
  font-size: 17px;
  width: 100%;

  &::placeholder{
    color: ${(props) => props.theme.searchBar};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${(props) => props.theme.searchBar};
  font-size: 17px;
`;
