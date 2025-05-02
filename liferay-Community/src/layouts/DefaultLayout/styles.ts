import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
`;


export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;  
  align-items: center;      
  padding: 2rem;
`;
