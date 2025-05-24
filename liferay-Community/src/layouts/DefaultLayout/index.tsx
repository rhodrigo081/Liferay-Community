import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LayoutContainer, MainContent, ContentWrapper } from "./styles";
import { useState } from "react";
import { CommunityCreation } from "../../components/ModalCreateCommunity/CommunityCreation";
import bannerJava from "../../assets/BannerJava.jpg"
import { v4 } from "uuid";


export function DefaultLayout() {
  const [communities, setCommunities] = useState<CardsProps[]>([{
    id: v4(),
    cover: bannerJava,
    title: "Java Developer",
    description: "Comunidade para estudar a linguagem Java!",
    members: 1,
    category: "Leitura e Ensino",
    joined: false,
  }]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCommunity = (newCommunity) => {
    setCommunities((prev) => [...prev, { ...newCommunity, joined: true }]);
  };

  const handleJoinCommunityUpdate = (communityId: string) => {
    setCommunities((prev) =>
      prev.map((community) => {
        return community.id === communityId
          ? { ...community, members: community.members + 1, joined: true }
          : community;
      })
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Sidebar openModal={openModal} communities={communities.filter(c => c.joined)} />
        <ContentWrapper>
          <Outlet
            context={{
              communities,
              handleAddCommunity,
              handleJoinCommunityUpdate,
            }}
          />
          {isModalOpen && (
            <CommunityCreation
              closeModal={closeModal}
              addCard={handleAddCommunity}
            />
          )}
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
