import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

import { LayoutContainer } from "./styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
}
