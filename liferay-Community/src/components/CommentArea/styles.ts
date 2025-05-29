import styled from "styled-components";

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  
`;

export const CommentBox = styled.div`
  flex: 1;

  & footer {
    margin-top: 1rem;
  }
`;

export const CommentContent = styled.div`
  background: ${(props) => props.theme.hoverBackground};
  border-radius: 8px;
  padding: 1rem;

  & header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  && p {
    margin-top: 1rem;
    color: ${(props) => props.theme.text};
  }
`;

export const ButtonDelete = styled.button`
  background: transparent;
  border: none;
  color: gray;
  cursor: pointer;
  line-height: 0;
  border-radius: 4px;
  transition: color 0.5s ease-in-out;

  & :hover {
    transition: color 0.5s ease-in-out;
    color: ${(props) => props.theme.danger};
  }
`;

export const AuthorAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    display: block;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme.name};
  }

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.lightText};
  }

  && time {
    display: block;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme.lightText};
  }
`;
