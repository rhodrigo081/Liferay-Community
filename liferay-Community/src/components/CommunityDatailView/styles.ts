import styled from "styled-components";

/* Layout base */
export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

/* Wrapper que divide sidebar e conteúdo */
export const LayoutWrapper = styled.div`
  display: flex;
`;

/* Sidebar */
export const Sidebar = styled.aside`
  width: 260px;
  background-color: ${({ theme }) => theme.communityCard.background};
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SidebarHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.name};
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.lightText};
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.text};
  }
`;

export const ChannelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ChannelItem = styled.li`
  padding: 6px 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.lightText};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.text};
  }
`;

/* Banner */
export const Banner = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* Conteúdo principal */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`;

export const CommunityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommunityTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const JoinButton = styled.button`
  background-color: ${({ theme }) => theme.communityCard.button};
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverIcon};
  }
`;

export const ForumContainer = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.lightText};
  margin-top: 30px;
  margin-bottom: 10px;
`;

/* Painel de mensagens */
export const ChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .chatHeader h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.lightText};
    margin-bottom: 10px;
  }

  .feedback-section h4 {
    margin: 0;
    color: ${({ theme }) => theme.lightText};
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const MessageContainer = styled.div`
  background-color: ${({ theme }) => theme.communityCard.background};
  border-radius: 10px;
  padding: 15px 20px;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    margin-right: 10px;
  }
`;

export const MessageAuthor = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.name};

  span {
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.lightText};
  }
`;

export const MessageTimestamp = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.lightText};
`;

export const MessageContent = styled.div`
  margin-top: 10px;

  h3 {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.title};
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }
`;

export const MessageInteractions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.lightText};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const MessageInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const CommentArea = styled.textarea`
  resize: none;
  border-radius: 8px;
  border: none;
  padding: 12px;
  min-height: 80px;
  background-color: ${({ theme }) => theme.communityCreation.inputBorder};
  color: ${({ theme }) => theme.title};
  font-size: 14px;
`;

export const SendButton = styled.button`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.communityCard.button};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.hoverIcon};
  }
`;
