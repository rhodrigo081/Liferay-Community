import styled from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.35rem;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.communityCard.background};
  overflow: hidden;
  width: 21.8rem;
  height: 15.6rem;
  border-radius: 8px;
  box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in;

  img {
    object-fit: cover;
    width: 100%;
    height: 40%;
  }

  &:hover {
    transition: all 0.2s ease-in;
    transform: translateY(-0.4rem);
  }
`;

export const CommunityInfo = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

export const Text = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;

  strong {
    font-size: 16px;
    color: ${(props) => props.theme.communityCard.title};
  }

  p {
    color: ${(props) => props.theme.communityCard.paragraph};
    text-align: justify;
    height: 4.1rem;
    font-size: 13px;
    line-height: 1.6;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  color: ${(props) => props.theme.communityCard.paragraph};

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
    gap: 0.3rem;
    font-size: 12px;
  }
`;
