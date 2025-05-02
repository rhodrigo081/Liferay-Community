import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

import { LayoutContainer } from "./styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";


import { Body } from "../../components/Body/body";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Body/>
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
}
