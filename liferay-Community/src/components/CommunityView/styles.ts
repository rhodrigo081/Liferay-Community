import styled from "styled-components";




export const CardsTitle = styled.h3`
  
  margin-bottom: 1.5rem;
`;

export const CardsContainer = styled.div`
display: flex;  
flex-wrap: wrap;
  gap: 1.5rem;
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

export const WorkBadge = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
   background-color: ${(props) => props.theme.button?.background || '#272833'};
  color: ${(props) => props.theme.button?.text || 'white'};
  border-radius: 10px;
  color: #DCDDE4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 80px;
  height: 20px;
  font-size: 14px;
  &:hover {
    background-color: ${(props) => props.theme.button?.hover || '#1d4ed8'};

`;

export const WorkBadgeWithIcon = styled.div`
  background-color: ${(props) => props.theme.card?.background || '#2563eb'};
  border-radius: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  width: 120px;
  height: 32px;
  font-size: 14px;

  &::before {
    content: "< />";
    font-size: 12px;
    opacity: 0.8;
  }
`;