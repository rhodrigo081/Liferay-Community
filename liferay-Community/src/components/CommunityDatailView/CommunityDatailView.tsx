import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  HR
} from "./styles";
import { Agenda } from "../Agenda/Agenda"; 

import bannerImg from "../../assets/java-community.svg";

export function CommunityDatailView() {
  const { communityId } = useParams();
  
  const [activeView, setActiveView] = useState<'forum' | 'agenda'>('forum');

  const renderContent = () => {
    if (activeView === 'agenda') {
      return (
        <>
          <Banner>
            <img src={bannerImg} alt="Banner Java" />
          </Banner>

          <Content>
            <ForumContainer>
              <CommunityHeader>
                <CommunityTitle>Java Developers</CommunityTitle>
              </CommunityHeader>
              <HR />
            </ForumContainer>

            <Agenda />
          </Content>
        </>
      );
    }

    return (
      <>
        <Banner>
          <img src={bannerImg} alt="Banner Java" />
        </Banner>

        <Content>
          <ForumContainer>
            <CommunityHeader>
              <CommunityTitle>Java Developers</CommunityTitle>
              <JoinButton>Participar</JoinButton>
            </CommunityHeader>
            <HR />
          </ForumContainer>

          <ChatPanel>
            <MessageContainer>
              <MessageHeader>
                <img src="/src/assets/user-image.svg" />
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

              <div className="feedback-section">
                <h4>Deixe seu feedback</h4>
                <MessageInput>
                  <CommentArea placeholder="Escreva um comentário..." />
                  <SendButton>Comentar</SendButton>
                </MessageInput>
              </div>
            </MessageContainer>

            <MessageContainer>
              <MessageHeader>
                <img src="/src/assets/user-image.svg"/>
                <MessageAuthor>
                  Victor Gabriel<br />
                  <span>@VictorGabriel</span>
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

              <div className="feedback-section">
                <h4>Deixe seu feedback</h4>
                <MessageInput>
                  <CommentArea placeholder="Escreva um comentário..." />
                  <SendButton>Comentar</SendButton>
                </MessageInput>
              </div>
            </MessageContainer>
          </ChatPanel>
        </Content>
      </>
    );
  };

  return (
    <MainContainer>
      <LayoutWrapper>
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <h2>Java Developers</h2>
          </SidebarHeader>
          <hr />
          
          <NavSection>
            <NavItem 
              onClick={() => setActiveView('forum')}
              className={activeView === 'forum' ? 'active' : ''}
            >
              Fórum
            </NavItem>
            <NavItem 
              onClick={() => setActiveView('agenda')}
              className={activeView === 'agenda' ? 'active' : ''}
            >
              Agenda
            </NavItem>
          </NavSection>
        </Sidebar>
        <div style={{ flex: 1 }}>
          {renderContent()}
        </div>
      </LayoutWrapper>
    </MainContainer>
  );
}