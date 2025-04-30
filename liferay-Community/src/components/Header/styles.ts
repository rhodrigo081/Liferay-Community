import styled from "styled-components";
import { CaretDown } from "phosphor-react";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.75rem;
  border-bottom: 2px solid ${(props) => props.theme.border};
  flex-direction: row;
  background: ${(props) => props.theme.header.background};

  nav {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  img{

    width: 12rem;

  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20rem;
  height: 3rem;
  border-radius: ${({ isDropdownOpen }) => (isDropdownOpen ? "20px 20px 0 0" : "50px")};
  background: ${(props) => props.theme.header.profile.background};
  padding: 0.5rem;
  justify-content: space-between;

  img{
    width: 2.3rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  strong {
    color: ${(props) => props.theme.name};
  }

  span {
    color: ${(props) => props.theme.lightText};
  }
`;

export const NotificationContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.header.notification.background};
`;

export const StyledCaretDown = styled(CaretDown)<{isRotated: boolean}>`
  color: ${(props) => props.theme.header.profile.arrow};
  font-size: 1.5rem;
  transition: transform 0.4s ease;
  cursor: pointer;
  transform: ${({ isRotated }) => (isRotated ? "rotate(-180deg)" : "rotate(0deg)")};
`;
