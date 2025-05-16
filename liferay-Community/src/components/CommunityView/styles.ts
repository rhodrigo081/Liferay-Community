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
  transition: transform 0.2s ease;
  width: 20rem;
  height: 20rem;
  position: relative; /* Adicionado para permitir posicionamento absoluto interno */
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardBanner = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;




export const CardContent = styled.div`
  padding: 1rem;
 
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`

  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text || 'white'};
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.lightText || '#bababa'};
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const  CardButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.button?.background || '#2563eb'};
  color: ${(props) => props.theme.button?.text || 'white'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  position: absolute;
  bottom: 1rem;
  left: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.button?.hover || '#1d4ed8'};
  }
`;

export const WorkBadge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: ${(props) => props.theme.button?.background || '#272833'};
  color: #DCDDE4;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 0.75rem;
  width: fit-content;
  
  &:hover {
    background-color: ${(props) => props.theme.button?.hover || '#1d4ed8'};
  }
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