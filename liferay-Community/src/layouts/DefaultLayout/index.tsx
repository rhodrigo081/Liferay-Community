import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LayoutContainer, MainContent, ContentWrapper } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <MainContent>
        <Sidebar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
