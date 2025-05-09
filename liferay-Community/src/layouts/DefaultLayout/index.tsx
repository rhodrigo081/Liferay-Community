import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LayoutContainer, MainContent, ContentWrapper } from "./styles";
import { useState } from "react";
import { CommunityCreation } from "../../components/ModalCreateCommunity/CommunityCreation";

export function DefaultLayout() {
  const [communities, setCommunities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCommunity = (newCommunity) => {
    setCommunities((prev) => [...prev, newCommunity]);
  };

  const handleJoinCommunityUpdate = (communityId: string) => {
    setCommunities((prev) =>
      prev.map((community) => {
        return community.id === communityId
          ? { ...community, members: community.members + 1 }
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
        <Sidebar openModal={openModal} />
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
