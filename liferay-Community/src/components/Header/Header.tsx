import {
  HeaderContainer,
  ProfileContainer,
  ProfileInfo,
  NotificationContainer,
  StyledCaretDown,
} from "./styles";
import { Bell, User, SignOut, Moon, Sun } from "phosphor-react";
import logoLightTheme from "../../assets/Liferay_Logo_LightTheme.png";
import logoDarkTheme from "../../assets/Liferay_Logo_DarkTheme.png";
import userimage from "../../assets/user-image.svg";
import { useTheme } from "styled-components";
import { Dropdown } from "../Dropdown/Dropdown.tsx";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const currentTheme = useTheme();
  const { toggleTheme, theme } = useThemeContext();

  // Lista de opções que serão exibidas no dropdown
  const options = [
    {
      label: "Perfil",
      icon: <User size={24} />,
      onClick: () => console.log("Perfil"),
    },
    {
      label: theme === "light" ? "Tema: Escuro" : "Tema: Claro",
      icon: theme === "light" ?   <Moon size={24} /> : <Sun size={24} />,
      onClick: toggleTheme,
    },
    {
      label: "Sair",
      icon: <SignOut size={24} />,
      isDanger: true,
      onClick: () => console.log("Sair"),
    },
  ];

   // Estado para controle da rotação do ícone de seta do dropdown
  const [rotated, setRotated] = useState(false);

  // Estado para controlar a exibição do Dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /**
   * Alterna a visibilidade do menu Dropdown de perfil
   * e a rotação visual do ícone de seta.
   */
  function handleDropdown() {
    setRotated(!rotated);
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={theme === "light" ? logoLightTheme : logoDarkTheme} alt="" />
      </NavLink>
      <nav>
        <NotificationContainer>
          <Bell size={20} color={currentTheme.header.notification.icon} />
        </NotificationContainer>

        <ProfileContainer isDropdownOpen={isDropdownOpen}>
          <ProfileInfo>
            <img src={userimage} alt="" />
            <div>
              <strong>Carlos Eduardo</strong>
              <span>@CarlosEduardo</span>
            </div>
          </ProfileInfo>
          <StyledCaretDown isRotated={rotated} onClick={handleDropdown} />
          {isDropdownOpen && (
            <Dropdown options={options}/>
          )}
        </ProfileContainer>
      </nav>
    </HeaderContainer>
  );
}
