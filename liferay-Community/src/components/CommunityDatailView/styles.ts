import styled from "styled-components";

// Estrutura geral
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0e1621;
  color: #fff;
  min-height: 100vh;
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export const CommunityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommunityTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

export const JoinButton = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #0d5dc0;
  }
`;

export const ForumContainer = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-top: 20px;
`;

export const ChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .chatHeader h3 {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 10px;
  }
`;

export const MessageContainer = styled.div`
  background-color: #1c2a3a;
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
  span {
    font-weight: 400;
    font-size: 12px;
    color: #999;
  }
`;

export const MessageTimestamp = styled.span`
  font-size: 12px;
  color: #aaa;
`;

export const MessageContent = styled.div`
  margin-top: 10px;
  h3 {
    margin: 0;
    font-size: 16px;
  }
  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #ddd;
  }
`;

export const MessageInteractions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  button {
    background: none;
    border: none;
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #fff;
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
  background-color: #2e3c4d;
  color: #fff;
`;

export const SendButton = styled.button`
  align-self: flex-end;
  background-color: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const LayoutWrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  width: 260px;
  background-color: #131c27;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  height: 100vh;
`;

export const SidebarHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
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
  color: #ccc;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    background-color: #1c2a3a;
    color: #fff;
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
  color: #aaa;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #243241;
    color: #fff;
  }
`;
