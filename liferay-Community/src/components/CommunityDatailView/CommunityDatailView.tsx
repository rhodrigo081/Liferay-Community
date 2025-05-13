import React from "react";
import {
  Banner,
  MainContainer,
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
  SendButton
} from "./styles";

import bannerImg from "../../assets/image.png";

export function CommunityDetailView() {
  return (
    <MainContainer>
      <Banner /> 
      <img src={bannerImg} alt=""  />
      <Content>
       
     
        <ForumContainer>
          <CommunityHeader>
            <CommunityTitle>Java Developers</CommunityTitle>
            <JoinButton>Participar</JoinButton>
          </CommunityHeader>

          <SectionTitle>Agenda</SectionTitle>
         
      

                 </ForumContainer>

        <ChatPanel>
          <div className="chatHeader">
            <h3>Hoje</h3>
          </div>

          <MessageContainer>
            <MessageHeader>
              <img src="/avatar.jpg" alt="Avatar" className="avatar" />
              <MessageAuthor>Sherman Walter<br/><span>@shermanthegoat</span></MessageAuthor>
              <MessageTimestamp>há 5 mins</MessageTimestamp>
            </MessageHeader>
            <MessageContent>
              <h3>Java é sua evolução: do desktop à nuvem 💼</h3>
              <p>Desde sua criação, Java foi orientado, adaptando-se às aplicações desktop para a web, mobile e agora para a nuvem, sendo essencial no desenvolvimento moderno.</p>
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
              <MessageAuthor>Sherman Walter<br/><span>@shermanthegoat</span></MessageAuthor>
              <MessageTimestamp>2 dias atrás</MessageTimestamp>
            </MessageHeader>
            <MessageContent>
              <h3>De que forma a Java pode me ajudar a Inovação profissional?</h3>
              <p>Desde sua criação, Java foi orientado, adaptando-se às aplicações desktop para a web, mobile e agora para a nuvem, sendo essencial no desenvolvimento moderno.</p>
            </MessageContent>
            <MessageInteractions>
              <button>👍 0</button>
              <button>💬 0</button>
              <button>🔄</button>
            </MessageInteractions>
          </MessageContainer>
        </ChatPanel>
      </Content>
    </MainContainer>
  );
}