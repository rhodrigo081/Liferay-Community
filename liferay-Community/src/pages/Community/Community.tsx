import { useOutletContext, useParams } from "react-router-dom";
import {
  MainContainer,
  Banner,
  Content,
  CommunityHeader,
  CommunityTitle,
  JoinButton,
  ForumContainer,
  SectionTitle,
  ChatPanel,
  LayoutWrapper,
  Sidebar,
  SidebarHeader,
  NavSection,
  NavItem,
  ChannelList,
  ChannelItem,
  HR,
} from "./styles";
import { Post } from "../../components/Post/Post";
import userImage from "../../assets/user-image.svg"


interface CardsProps {
  id: string;
  cover: string;
  title: string;
  description: string;
  members: number;
  category: string;
  joined: boolean;
}

interface OutletContextType {
  communities: CardsProps[];
  handleAddCommunity: (newCommunity: Omit<CardsProps, "joined">) => void;
  handleJoinCommunityUpdate: (communityId: string) => void;
}

export function CommunityPage() {
  const { id: communityId } = useParams<{ id: string }>();
  const { communities, handleJoinCommunityUpdate } =
    useOutletContext<OutletContextType>();

  const community = communities.find((c) => c.id === communityId);

  function handleJoin() {
    if (community) {
      handleJoinCommunityUpdate(community.id);
    }
  }

  const posts = [
    {
      id: 1,
      author: {
        image: userImage,
        name: "Rhodrigo Rodrigues",
        username: "@rhodrigo081",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Olá! Meu nome é Rhodrigo e sou estudante do 2º período do tecnólogo em Análise e Desenvolvimento de Sistemas na FICR. ",
        },
        {
          type: "paragraph",
          content:
            "Tenho paixão por tecnologia e desenvolvimento de software.Tenho conhecimento em Spring Boot, SQL e React, além de estar em constante aprendizado para me tornar um desenvolvedor mais completo. Atualmente, estou participando de trilhas de conhecimento e bootcamps para aprofundar minhas habilidades em desenvolvimento web e backend. Estou em busca de oportunidades para aplicar meus conhecimentos em projetos desafiadores e contribuir para soluções inovadoras.",
        },
        { type: "link", content: "rhodrigo081.developer/FICR" },
      ],
      publishedAt: new Date("2025-03-30 21:40:00"),
    },
  ];

  return (
    <MainContainer>
      <LayoutWrapper>
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <h2>{community.title}</h2>
          </SidebarHeader>
          <hr />
          <SectionTitle>Agenda</SectionTitle>
        </Sidebar>

        {/* Conteúdo principal */}
        <div className="mainCommunity">
          <Banner>
            <img src={community.cover} alt="Banner Java" />
          </Banner>

          <Content>
            <ForumContainer>
              <CommunityHeader>
                <CommunityTitle>{community.title}</CommunityTitle>
                <JoinButton onClick={handleJoin}>
                  {community?.joined ? "Participando" : "Participar"}
                </JoinButton>
              </CommunityHeader>
              <HR />
            </ForumContainer>

            <ChatPanel>
              {posts.map((post) => {
                return(
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                )
              })}
            </ChatPanel>
          </Content>
        </div>
      </LayoutWrapper>
    </MainContainer>
  );
}
