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
  MessageContainer,
  MessageHeader,
  MessageAuthor,
  MessageContent,
  MessageInteractions,
  MessageTimestamp,
  MessageInput,
  CommentArea,
  SendButton,
  LayoutWrapper,
  Sidebar,
  SidebarHeader,
  NavSection,
  NavItem,
  ChannelList,
  ChannelItem,
  HR,
} from "./styles";

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
  const { communities, handleJoinCommunityUpdate } = useOutletContext<OutletContextType>();

  const community = communities.find((c) => c.id === communityId);

  function handleJoin() {
    if (community) {
      handleJoinCommunityUpdate(community.id);
    }
  }

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
              <MessageContainer>
                <MessageHeader>
                  <img src="/src/assets/user-image.svg" />
                  <MessageAuthor>
                    Sherman Walter
                    <br />
                    <span>@shermanthegoat</span>
                  </MessageAuthor>
                  <MessageTimestamp>há 3 horas</MessageTimestamp>
                </MessageHeader>

                <MessageContent>
                  <h3>Java e sua evolução: do desktop à nuvem 💼</h3>
                  <p>
                    Desde sua criação, Java se reinventou, expandindo-se das
                    aplicações desktop para a web, mobile e agora para a nuvem.
                  </p>
                </MessageContent>

                <MessageInteractions>
                  <button>👍 0</button>
                  <button>💬 0</button>
                  <button>🔄</button>
                </MessageInteractions>

                <div className="feedback-section">
                  <h4>Deixe seu feedback</h4>
                  <MessageInput>
                    <CommentArea placeholder="Escreva um comentário..." />
                    <SendButton>Publicar</SendButton>
                  </MessageInput>
                </div>
              </MessageContainer>

              <MessageContainer>
                <MessageHeader>
                  <img src="/src/assets/user-image.svg" />
                  <MessageAuthor>
                    Victor Gabriel
                    <br />
                    <span>@VictorGabriel</span>
                  </MessageAuthor>
                  <MessageTimestamp>2 dias atrás</MessageTimestamp>
                </MessageHeader>

                <MessageContent>
                  <h3>De que forma o Java pode me ajudar profissionalmente?</h3>
                  <p>
                    Desde sua criação, Java se reinventou, expandindo-se das
                    aplicações desktop para a web, mobile e agora para a nuvem.
                  </p>
                </MessageContent>

                <MessageInteractions>
                  <button>👍 0</button>
                  <button>💬 0</button>
                  <button>🔄</button>
                </MessageInteractions>

                <div className="feedback-section">
                  <h4>Deixe seu feedback</h4>
                  <MessageInput>
                    <CommentArea placeholder="Escreva um comentário..." />
                    <SendButton>Publicar</SendButton>
                  </MessageInput>
                </div>
              </MessageContainer>
            </ChatPanel>
          </Content>
        </div>
      </LayoutWrapper>
    </MainContainer>
  );
}
