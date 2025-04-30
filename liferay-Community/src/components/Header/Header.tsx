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
  const rawTheme = useTheme();
  const { toggleTheme, theme } = useThemeContext();

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

  function handleOptionSelect(value: string) {
    console.log("Selecionado:", value);
  }

  const [rotated, setRotated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleDropdown() {
    setRotated(!rotated);
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <HeaderContainer>
      <NavLink>
        <img src={theme === "light" ? logoLightTheme : logoDarkTheme} alt="" />
      </NavLink>
      <nav>
        <NotificationContainer>
          <Bell size={20} color={rawTheme.header.notification.icon} />
        </NotificationContainer>

        <ProfileContainer isDropdownOpen={isDropdownOpen}>
          <ProfileInfo>
            <img src={userimage} alt="" />
            <div>
              <strong>Brian Chan</strong>
              <span>@brianchan</span>
            </div>
          </ProfileInfo>
          <StyledCaretDown isRotated={rotated} onClick={handleDropdown} />
          {isDropdownOpen && (
            <Dropdown options={options} onSelect={handleOptionSelect} />
          )}
        </ProfileContainer>
      </nav>
    </HeaderContainer>
  );
}
