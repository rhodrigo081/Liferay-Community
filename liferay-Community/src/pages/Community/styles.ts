import styled from "styled-components";

/* Layout base */
export const MainContainer = styled.div`
  padding: 6rem 0 0 5.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: 100%;
  width: 100%;
`;

/* Wrapper que divide sidebar e conteúdo */
export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;

  .mainCommunity {
    flex: 1;
  }
`;

/* Sidebar */
export const Sidebar = styled.aside`
  width: 12rem;
  background-color: ${({ theme }) => theme.communityCard.background};
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350%;
  gap: 2rem;

  hr {
    position: relative;
    border: 1px solid ${(props) => props.theme.border};
    width: 100%;
  }
`;

export const SidebarHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.name};
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.lightText};
`;

export const HR = styled.hr`
  margin-top: 15px;
  position: relative;
  border: 1px solid ${(props) => props.theme.border};
  width: auto;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.lightText};
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.text};
  }

  &.active {
    background-color: ${({ theme }) => theme.communityCard.button};
    color: white;
    font-weight: 600;
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
  height: 22rem;
  overflow: hidden;
  border-radius: 40px;

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

  hr {
    position: relative;
    border: 1px solid ${(props) => props.theme.border};
    width: auto;
  }
`;

export const CommunityTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const JoinButton = styled.button`
  position: relative;
  overflow: hidden;

  background: ${({ theme }) => theme.communityCard.button};
  color: white;
  border: none;
  width: 12rem;
  height: 2.5rem;
  font-weight: bold;
  border-radius: 8px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.linkHover};
  }

  &.joined {
    background: ${({ theme }) => theme.border};
  }

  &.joined.leave {
    background: ${({ theme }) => theme.danger};
  }

  .btn-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
  }

  .btn-text.default {
    opacity: 1;
  }

  &.leave .btn-text.default {
    opacity: 0;
  }

  .btn-text.hover {
    opacity: 0;
  }

  &.leave .btn-text.hover {
    opacity: 1;
  }
`;

export const ForumContainer = styled.div`
  margin-bottom: 30px;
`;

/* Painel de mensagens */
export const ChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

export const Notice = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  font-size: 1rem;
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
  width: 100%;
  margin-left: 10px;
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
  width: 10%;
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
  border: 1px solid ${(props) => props.theme.border};
  padding: 12px;
  min-height: 80px;
  background: ${({ theme }) => theme.hoverBackground};
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
