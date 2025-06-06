import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 5.6rem;
  height: 100%;
  border-right: 2px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 2rem;
  position: fixed;
  flex-shrink: 0;
  background: ${props => props.theme.background};
  z-index: 8;
  top: 6rem;

  hr {
    position: relative;
    border: 1px solid ${(props) => props.theme.border};
    width: 80%;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
`;

export const IconGroup = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const IconWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "active"
})<{ active: boolean }>`
  font-size: 3.1rem;
  color: ${(props) =>
    props.active ? props.theme.hoverIcon : props.theme.icon};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.hoverIcon};
  }
`;

export const Indicator = styled.div`
  position: absolute;
  left: 0;
  top: 2rem;
  width: 0.31rem;
  height: 3.1rem;
  background-color: ${(props) => props.theme.indicator};
  border-radius: 0 4px 4px 0;
  transition: top 0.3s ease;
`;

export const CommunityList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img{
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    cursor: pointer;
  }
`