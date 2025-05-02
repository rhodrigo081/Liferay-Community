import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 91px;
`;

export const Banner = styled.div`
  background: linear-gradient(135deg, #47C6F5, #0B5FFF);
  color: ${(props) => props.theme.accent10 || 'white'};
  padding: 2rem;
  margin-bottom: 2.5rem;
`;

export const BannerText = styled.div`
  h1, h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const CardsTitle = styled.h3`
  margin-left: 300px;
  margin-bottom: 1.5rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-left: 300px;
  margin-bottom: 1.5rem;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.card?.background || '#00072B'};
  border-radius: 5px;
  padding: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
  
  img {
    width: 100%;
    border-radius: 4px;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text || 'white'};
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.lightText || '#bababa'};
`;

export const CardButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.button?.background || '#2563eb'};
  color: ${(props) => props.theme.button?.text || 'white'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.button?.hover || '#1d4ed8'};
  }
`;