import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LayoutContainer, MainContent, ContentWrapper } from "./styles";
import { useState, useEffect } from "react"; 
import { CommunityCreation } from "../../components/ModalCreateCommunity/CommunityCreation";

interface Community {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
  category: string;
}

export function DefaultLayout() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
 
  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        setLoading(true);
        setError(null);
        const mockData: Community[] = [
          {
            id: '1',
            cover: 'https://placehold.co/400x200/007bff/ffffff?text=Java',
            title: 'Java Developers',
            description: 'Comunidade para desenvolvedores Java de todos os níveis de experiência.',
            members: 1500,
            category: 'Leitura e Ensino'
          },
          {
            id: '2',
            cover: 'https://placehold.co/400x200/28a745/ffffff?text=React',
            title: 'React Enthusiasts',
            description: 'Discussões e ajuda para quem ama React.js e desenvolvimento frontend.',
            members: 2300,
            category: 'Leitura e Ensino'
          },
          {
            id: '3',
            cover: 'https://placehold.co/400x200/dc3545/ffffff?text=Design',
            title: 'UX/UI Designers',
            description: 'Espaço para designers de UX/UI compartilharem ideias e portfólios.',
            members: 800,
            category: 'Trabalho'
          },
          {
            id: '4',
            cover: 'https://placehold.co/400x200/ffc107/333333?text=Games',
            title: 'Jogos Indie',
            description: 'Comunidade para discutir e descobrir jogos indie.',
            members: 500,
            category: 'Jogos'
          },
          {
            id: '5',
            cover: 'https://placehold.co/400x200/6f42c1/ffffff?text=Leitura',
            title: 'Clube do Livro',
            description: 'Leitura e discussão de clássicos e novidades literárias.',
            members: 350,
            category: 'Leitura e Ensino'
          },
        ];

        await new Promise(resolve => setTimeout(resolve, 500));

        setCommunities(mockData); 
      } catch (err: any) {
        setError(err.message || "Erro ao carregar comunidades.");
        console.error("Erro ao carregar comunidades:", err);
      } finally {
        setLoading(false); 
      }};

    fetchCommunities(); 
  }, []); 

  const handleAddCommunity = (newCommunity: Community) => {
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

  if (loading) {
    return (
      <LayoutContainer>
        <Header />
        <MainContent>
          <Sidebar openModal={openModal} />
          <ContentWrapper>
            <div>Carregando comunidades...</div>
          </ContentWrapper>
        </MainContent>
      </LayoutContainer>
    );
  }

  if (error) {
    return (
      <LayoutContainer>
        <Header />
        <MainContent>
          <Sidebar openModal={openModal} />
          <ContentWrapper>
            <div>Erro ao carregar comunidades: {error}</div>
          </ContentWrapper>
        </MainContent>
      </LayoutContainer>
    );
  }

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
            }}/>

          {isModalOpen && (
            <CommunityCreation
              closeModal={closeModal}
              addCard={handleAddCommunity}
            />)}
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
