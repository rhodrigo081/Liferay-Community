import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 45rem;
  color: white;
  font-family: 'Segoe UI', sans-serif;
`;



export const Banner = styled.div`
  padding: 0rem;
  margin-bottom: 0rem;
  border-radius: 20px 20px 20px 20px;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .notification {
    font-size: 1.2rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .username {
    font-weight: bold;
    font-size: 0.9rem;
  }
  
  .handle {
    font-size: 0.8rem;
    color: #ccc;
  }
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
`;

export const Content = styled.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Sidebar = styled.aside`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 25px;
  border-right: 1px solid #2d2f34;
`;

export const SidebarButton = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? '#1a4fc5' : 'transparent'};
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#1a4fc5' : '#1c1e25'};
  }
`;

export const CommunityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
`;

export const CommunityTitle = styled.h2`
  color: white;
  font-size: 1.4rem;
`;

export const JoinButton = styled.button`
  background-color: #1a4fc5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #1341a5;
  }
`;

export const ForumContainer = styled.section`
  width: 300px;
  border-right: 1px solid #2d2f34;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const SectionTitle = styled.div`
  color: #9e9e9e;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 10px;
  margin-top: 5px;
`;

export const ChatList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ChatItem = styled.li<{ active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.active ? '#1a4fc5' : 'transparent'};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? '#1a4fc5' : '#1c1e25'};
  }
`;

export const ChatItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const ChatItemTitle = styled.div`
  color: white;
  font-weight: 500;
`;

export const ChatItemTime = styled.div`
  color: #9e9e9e;
  font-size: 0.8rem;
`;

export const ChatItemPreview = styled.p`
  color: #9e9e9e;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatPanel = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  
  .chatHeader {
    margin-bottom: 20px;
    
    h3 {
      font-size: 1.2rem;
      color: #9e9e9e;
    }
  }
  
  .feedback-section {
    margin: 20px 0;
    
    h4 {
      font-size: 1rem;
      color: #9e9e9e;
      margin-bottom: 10px;
    }
  }
`;

export const MessageContainer = styled.div`
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #2d2f34;
  }
`;

export const MessageAuthor = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 0.9rem;
  
  span {
    font-weight: normal;
    color: #9e9e9e;
    font-size: 0.8rem;
  }
`;

export const MessageTimestamp = styled.div`
  color: #9e9e9e;
  font-size: 0.8rem;
`;

export const MessageContent = styled.div`
  background-color: #1c1e25;
  margin-bottom: 15px;
  
  h3 {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  
  p {
    color: #e0e0e0;
    line-height: 1.5;
    font-size: 0.95rem;
  }
`;

export const MessageInteractions = styled.div`
  display: flex;
  gap: 15px;
  
  button {
    background: none;
    border: none;
    color: #9e9e9e;
    cursor: pointer;
    transition: color 0.2s;
    
    &:hover {
      color: white;
    }
  }
`;

export const MessageInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CommentArea = styled.textarea`
  background-color: #12151b;
  border: 1px solid #2d2f34;
  border-radius: 8px;
  padding: 10px;
  color: white;
  resize: none;
  height: 80px;
  
  &:focus {
    outline: none;
    border-color: #1a4fc5;
  }
  
  &::placeholder {
    color: #9e9e9e;
  }
`;

export const SendButton = styled.button`
  background-color: #1a4fc5;
  color: white;
  border: none;
  padding: 8px 0;
  border-radius: 8px;
  font-weight: bold;
  align-self: flex-start;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #1341a5;
  }
`;