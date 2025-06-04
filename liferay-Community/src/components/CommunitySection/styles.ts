import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  
  @media (max-width: 1360px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
