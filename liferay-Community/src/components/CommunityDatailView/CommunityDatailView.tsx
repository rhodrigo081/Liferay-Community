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
  ChannelItem
} from "./styles";

import bannerImg from "../../assets/BannerJava.jpg";

export function CommunityDetailView() {
  return (
    <MainContainer>
      <LayoutWrapper>
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <h2>Java Developers</h2>
          </SidebarHeader>

          <NavSection>
            <NavItem>🏠 Home</NavItem>
            <NavItem>🕒 Linha do Tempo</NavItem>
            <NavItem>💬 Fóruns</NavItem>
            <NavItem>📁 Projetos</NavItem>
          </NavSection>

          <SectionTitle>Canais</SectionTitle>
          <ChannelList>
            <ChannelItem># geral</ChannelItem>
            <ChannelItem># dúvidas</ChannelItem>
            <ChannelItem># eventos</ChannelItem>
            <ChannelItem># backend</ChannelItem>
          </ChannelList>
        </Sidebar>

        {/* Conteúdo principal */}
        <div style={{ flex: 1 }}>
          <Banner>
            <img src={bannerImg} alt="Banner Java" />
          </Banner>

          <Content>
            <ForumContainer>
              <CommunityHeader>
                <CommunityTitle>Java Developers</CommunityTitle>
                <JoinButton>Participar</JoinButton>
              </CommunityHeader>

              <SectionTitle>Linha do Tempo</SectionTitle>
            </ForumContainer>

            <ChatPanel>
              <div className="chatHeader">
                <h3>Hoje</h3>
              </div>

              <MessageContainer>
                <MessageHeader>
                  <img src="/avatar.jpg" alt="Avatar" className="avatar" />
                  <MessageAuthor>
                    Sherman Walter<br />
                    <span>@shermanthegoat</span>
                  </MessageAuthor>
                  <MessageTimestamp>há 3 horas</MessageTimestamp>
                </MessageHeader>

                <MessageContent>
                  <h3>Java e sua evolução: do desktop à nuvem 💼</h3>
                  <p>
                    Desde sua criação, Java se reinventou, expandindo-se das aplicações desktop para a web, mobile e agora para a nuvem.
                  </p>
                </MessageContent>

                <MessageInteractions>
                  <button>👍 0</button>
                  <button>💬 0</button>
                  <button>🔄</button>
                </MessageInteractions>
              </MessageContainer>

              <div className="feedback-section">
                <h4>Deixe seu feedback</h4>
                <MessageInput>
                  <CommentArea placeholder="Escreva um comentário..." />
                  <SendButton>Publicar</SendButton>
                </MessageInput>
              </div>

              <MessageContainer>
                <MessageHeader>
                  <img src="/avatar.jpg" alt="Avatar" className="avatar" />
                  <MessageAuthor>
                    Sherman Walter<br />
                    <span>@shermanthegoat</span>
                  </MessageAuthor>
                  <MessageTimestamp>2 dias atrás</MessageTimestamp>
                </MessageHeader>

                <MessageContent>
                  <h3>De que forma o Java pode me ajudar profissionalmente?</h3>
                  <p>
                    Desde sua criação, Java se reinventou, expandindo-se das aplicações desktop para a web, mobile e agora para a nuvem.
                  </p>
                </MessageContent>

                <MessageInteractions>
                  <button>👍 0</button>
                  <button>💬 0</button>
                  <button>🔄</button>
                </MessageInteractions>
              </MessageContainer>
            </ChatPanel>
          </Content>
        </div>
      </LayoutWrapper>
    </MainContainer>
  );
}
