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
import { CommunityCreation } from "../ModalCreateCommunity/CommunityCreation";

interface SidebarProps{
  openModal: () => void;
}

export function Sidebar({openModal}: SidebarProps) {
  const location = useLocation();
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topIcons = [
    { icon: <FaRegCompass />, path: "/", index: 0 },
    { icon: <PiUsersFill />, path: "/amigos", index: 1 },
  ];

  const bottomIcons = [
    { icon: <IoAddCircleOutline onClick={openModal}/>, index: 2 }, 
  ];

  function handleModal() {
    setIsModalOpen((prev) => !prev);
  }

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
            to={path}
            key={index}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => {}}
            to={path}
            key={index}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconGroup
              ref={(el) => (iconRefs.current[index] = el)}
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
            ref={(el) => (iconRefs.current[item.index] = el)}
          >
            <IconWrapper>{item.icon}</IconWrapper>
          </IconGroup>
        ))}
      </BottomSection>

      {isModalOpen && <CommunityCreation closeModal={handleModal} />}
    </SidebarContainer>
  );
}
