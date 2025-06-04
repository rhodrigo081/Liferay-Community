import styled from "styled-components";

export const AreaContainer = styled.div`
  background-color: ${({ theme }) => theme.communityCard.background};
  border-radius: 24px;
  width: 100%;
  min-height: 15rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      width: 10%;
      font-size: 12px;
      color: ${(props) => props.theme.lightText};
    }

    footer {
      visibility: hidden;
      max-height: 0;
    }
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;

    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.name};

    span {
      font-weight: 400;
      font-size: 12px;
      color: ${({ theme }) => theme.lightText};
    }
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  width: 90%;

  h3 {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.title};
  }

  p {
    padding: 0.5rem;
    font-size: 15px;
    color: ${({ theme }) => theme.text};
    a {
      color: ${({ theme }) => theme.link};
      text-decoration: none;
      font-weight: 700;
      transition: all 0.5s ease-in;

      &:hover {
        color: ${({ theme }) => theme.linkHover};
      }
    }
  }
`;

export const FeedBack = styled.div`
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

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10px;

  & button[type="submit"]:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  footer {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 100px;
    transform: translateY(0);
  }

  footer.hidden {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
    overflow: hidden;
    pointer-events: none;
  }

  footer.visible {
    opacity: 1;
    max-height: 100px;
    transform: translateY(0);
    pointer-events: auto;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.border};
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  padding: 12px;
  min-height: 80px;
  background: ${({ theme }) => theme.hoverBackground};
  color: ${({ theme }) => theme.title};
  font-size: 14px;
  line-height: 1.4;
  margin-top: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.communityCard.button};
  color: ${({ theme }) => theme.text};
  border: none;
  width: 8rem;
  height: 2.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.hoverIcon};
  }

  & :not(:disabled):hover {
    background: ${({ theme }) => theme.hoverIcon};
  }

  & :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
`;

export const LikeButton = styled.button<{ liked: boolean }>`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  gap: 0.4rem; 

  svg {
    fill: ${({ liked, theme }) => (liked ? theme.danger : theme.lightText)};
    stroke: ${({ liked, theme }) => (liked ? theme.danger : theme.lightText)};
    width: 1.2rem;
    height: 1.2rem;
    transition: fill 0.3s ease, stroke 0.3s ease;
  }

  &:hover {
    color: ${({ liked, theme }) => (liked ? theme.hoverdanger : theme.text)};

    svg {
      fill: ${({ liked, theme }) => (liked ? theme.hoverdanger : theme.text)};
      stroke: ${({ liked, theme }) => (liked ? theme.hoverdanger : theme.text)};
    }
  }
`;
