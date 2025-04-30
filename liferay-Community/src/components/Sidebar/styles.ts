import styled from "styled-components";
import { FaRegCompass } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";

export const SidebarContainer = styled.div`
  width: 5.6rem;
  height: 100vh;
  border-right: 2px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 2rem;
  position: relative;

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
  gap: 2rem;
`;

export const IconGroup = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const IconWrapper = styled.span<{ isActive?: boolean }>`
  font-size: 3.1rem;
  color: ${(props) =>
    props.isActive ? props.theme.hoverIcon : props.theme.icon};
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
