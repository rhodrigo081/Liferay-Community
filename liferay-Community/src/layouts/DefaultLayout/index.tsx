import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

import { LayoutContainer  } from "./styles";
import { ContentWrapper } from "./styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";


import { Body } from "../../components/Body/body";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>  
      <Sidebar />
      <Body/>
      <Outlet />
      </ContentWrapper>
    </LayoutContainer>
  );
}
