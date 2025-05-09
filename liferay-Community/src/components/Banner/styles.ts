import styled from "styled-components";

export const BannerContainer = styled.div`
  transition: all 0.3s ease-in;
  width: 100%;
  height: 15.3rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.banner.leftColor},
    ${(props) => props.theme.banner.rightColor}
  );
  color: ${(props) => props.theme.banner.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 2.5rem;

  h1 {
    line-height: 0.9;
    font-size: 3rem;
    font-weight: 900;
  }

  span{
    font-size: 2rem;
    position: relative;
    top: -25%;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;
