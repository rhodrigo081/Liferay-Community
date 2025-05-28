import { FaRegCompass } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  SidebarContainer,
  IconWrapper,
  Indicator,
  TopSection,
  BottomSection,
  IconGroup,
} from "./styles";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  openModal: () => void;
}

export function Sidebar({ openModal }: SidebarProps) {
  const location = useLocation();
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorTop, setIndicatorTop] = useState(0);

  const topIcons = [
    { icon: <FaRegCompass />, path: "/", index: 0 },
    { icon: <PiUsersFill />, path: "/amigos", index: 1 },
  ];

  const bottomIcons = [
    {
      icon: <IoAddCircleOutline />,
      index: 2,
      onClick: openModal
    },
  ];

  useEffect(() => {
    const currentIcon = iconRefs.current.find(
      (el) => el && el.classList.contains("active")
    );

    if (currentIcon) {
      const offsetTop = currentIcon.offsetTop;
      setIndicatorTop(offsetTop);
    }
  }, [location.pathname]);

  return (
    <SidebarContainer>
      <Indicator style={{ top: `${indicatorTop}px` }} />

      <TopSection>
        {topIcons.map(({ icon, index, path }) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconGroup
              ref={(el) => {
                iconRefs.current[index] = el;
              }}
              className={location.pathname === path ? "active" : ""}
            >
              <IconWrapper isActive={location.pathname === path}>
                {icon}
              </IconWrapper>
            </IconGroup>
          </NavLink>
        ))}
      </TopSection>

      <hr />

      <BottomSection>
        {bottomIcons.map((item) => (
          <IconGroup
            key={item.index}
            ref={(el) => { // Correção aqui!
                iconRefs.current[item.index] = el;
            }}
            onClick={item.onClick}
            style={{ cursor: 'pointer' }}
          >
            <IconWrapper>{item.icon}</IconWrapper>
          </IconGroup>
        ))}
      </BottomSection>
    </SidebarContainer>
  );
}
