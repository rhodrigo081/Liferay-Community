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

export function Sidebar() {
  // Acessa a localização atual da rota
  const location = useLocation();
  
  // Armazena os ícones da sidebar 
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mantém a posição do indicador 
  const [indicatorTop, setIndicatorTop] = useState(0);

  const topIcons = [
    { icon: <FaRegCompass />, path: "/", index: 0 }, 
    { icon: <PiUsersFill />, path: "/amigos", index: 1 }, 
  ];

  const bottomIcons = [{ icon: <IoAddCircleOutline />, index: 2 }];

  // Atualiza a posição do indicador sempre que a rota mudar
  useEffect(() => {
    // Procura o ícone ativo 
    const currentIcon = iconRefs.current.find(
      (el) => el && el.classList.contains("active")
    );
    
    // Se um ícone ativo for encontrado, calcula a posição do topo desse ícone
    if (currentIcon) {
      const offsetTop = currentIcon.offsetTop;
      
      // Atualiza o estado da posição do indicador, fazendo ele se mover para a posição do ícone ativo
      setIndicatorTop(offsetTop);
    }
  }, [location.pathname]); // O efeito é executado toda vez que a rota muda

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
        {bottomIcons.map(({ icon, index }) => (
          <IconGroup key={index} ref={(el) => (iconRefs.current[index] = el)}>
            <IconWrapper>{icon}</IconWrapper> 
          </IconGroup>
        ))}
      </BottomSection>
    </SidebarContainer>
  );
}

