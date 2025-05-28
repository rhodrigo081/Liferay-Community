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
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1360px){
    width: 75%;
  }
`;

export const FilterSide = styled.div`
  width: 15rem;
  height: 100%;
  margin-left: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
  }
`;
