import styled from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  width: 100%;
  gap: 1.35rem;
  
  @media (max-width: 1919px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.35rem;
<<<<<<< HEAD
    height: 90%;
    width: 150%;
    
=======
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1380px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.35rem;
    height: 100%;
    width: 100%;
>>>>>>> e0b57237d662519230b5115ca586712e4b85595d
  }

  a {
    width: 0;
    text-decoration: none;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.communityCard.background};
  overflow: hidden;
  width: 21.8rem;
  height: 20rem;
  border-radius: 8px;
  box-shadow: 0.125rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in;
  align-items: center;

  img {
    object-fit: cover;
    width: 21.8rem;
    height: 40%;
  }

  &:hover {
    transition: all 0.2s ease-in;
    transform: translateY(-0.4rem);
  }

  @media(max-width: 1360px){
    width: 18rem;

    
  }
`;

export const CommunityInfo = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

   @media(max-width: 1360px){
    width: 100%;
    height: 20rem;
  }
`;

export const Text = styled.div`
  width: 90%;
  max-width: 90%;
  display: flex;
  align-items: flex-start;
  max-height: 4.1rem;
  overflow-wrap: break-word;
  word-break: break-word;

  

  strong {
    font-size: 1rem;
    color: ${(props) => props.theme.communityCard.title};
  }

  p {
    color: ${(props) => props.theme.communityCard.paragraph};
    text-align: justify;
    font-size: 0.8125rem;
    line-height: 1.6;
  }
   @media(max-width: 1360px){
    width: 100%;
     
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0.8rem;
  color: ${(props) => props.theme.communityCard.paragraph};
  position: absolute;
  top: 85%;

  div {
    display: flex;
    align-items: center;
    min-width: 7.5rem;
    min-height: 100%;
    height: 100%;
  }

  button {
    width: 7.5rem;
    height: 100%;
    background: ${(props) => props.theme.communityCard.button};
    color: #ffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transition: all 0.2s ease-in;
      opacity: 0.7;
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-size: 0.75rem;
  }

  @media(max-width: 1360px){
    gap: 0.765rem;
  }
`;

export const Category = styled.div`
  position: relative;
  margin-top: 0.1rem;
  padding: 0.25rem 0.75rem;
  color: ${(props) => props.theme.communityCard.category};
  background-color: ${(props) => props.theme.communityCard.categoryBackground};
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.communityCard.categoryHover};
  }

  @media(max-width: 1360px){
  margin-top: 15px;
  }
`;
