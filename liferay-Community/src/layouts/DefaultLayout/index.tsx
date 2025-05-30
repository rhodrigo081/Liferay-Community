import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LayoutContainer, MainContent, ContentWrapper } from "./styles";
import { useEffect, useState } from "react";
import { CommunityCreation } from "../../components/ModalCreateCommunity/CommunityCreation";
import bannerJava from "../../assets/Java-Developers.svg";
import bannerEnglishStudants from "../../assets/English-Studants.svg";
import bannerVolei from "../../assets/Jogadores-de-Volei.svg";
import csGo from "../../assets/CS-Go.svg";
import { v4 } from "uuid";

export function DefaultLayout() {
  const [communities, setCommunities] = useState<CardsProps[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("communities");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCommunities(parsed);
      } catch (error) {
        console.error("Erro ao ler communities do localStorage:", error);
        localStorage.removeItem("communities");
        setCommunities([]);
      }
    } else {
      setCommunities([
        {
          id: v4(),
          cover: bannerJava,
          title: "Java Developers",
          description:
            "Este grupo é dedicado a estudantes e profissionais que querem aprender e evoluir no desenvolvimento com Java.",
          members: 107,
          category: "Leitura e Ensino",
          joined: false,
        },
        {
          id: v4(),
          cover: bannerEnglishStudants,
          title: "English Studants",
          description:
            "Se você quer melhorar seu inglês, este é o lugar certo. Aqui praticamos conversação, trocamos dicas de gramática, vocabulário e expressões cotidianas.",
          members: 120,
          category: "Leitura e Ensino",
          joined: false,
        },
        {
          id: v4(),
          cover: bannerVolei,
          title: "Jogadores de Vôlei",
          description:
            "Para quem ama vôlei e quer trocar experiências sobre o esporte. Aqui você pode discutir técnicas, estratégias de jogo, acompanhar campeonatos.",
          members: 76,
          category: "Esportes",
          joined: false,
        },
        {
          id: v4(),
          cover: csGo,
          title: "CS:GO.BR",
          description:
            "Se Counter-Strike é o seu jogo favorito, este grupo foi feito para você. Monte times, jogue partidas competitivas, troque dicas sobre configurações e estratégias, além de acompanhar as novidades do cenário profissional.",
          members: 90,
          category: "Jogos",
          joined: false,
        },
      ]);
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCommunity = (newCommunity: Omit<CardsProps, "joined">) => {
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

  const handleLeaveCommunityUpdate = (communityId: string) => {
    setCommunities((prev) =>
      prev.map((community) => {
        return community.id === communityId
          ? { ...community, members: community.members - 1, joined: false }
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
        <Sidebar
          openModal={openModal}
          communities={communities.filter((c) => c.joined)}
        />
        <ContentWrapper>
          <Outlet
            context={{
              communities,
              handleAddCommunity,
              handleJoinCommunityUpdate,
              handleLeaveCommunityUpdate,
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
