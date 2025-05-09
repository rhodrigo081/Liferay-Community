import styled from "styled-components";

export const ExploreContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 0 0 5rem;
  color: ${(props) => props.theme.title};
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
