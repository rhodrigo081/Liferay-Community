import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: row;
`;

export const ContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;
