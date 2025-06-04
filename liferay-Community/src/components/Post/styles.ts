import styled from "styled-components";


export const PostContainer = styled.div`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.communityCard.background};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    width: 3rem;
  }
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;

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
  witdh: 642px;
  line-height: 1.4;

  &::placeholder{
    font-weight: 500;
    font-size: 16px
  }
`;

export const PostButton = styled.button.attrs({ type: 'submit' })`
  width: 6rem;
  height: 2.5rem;
  position: relative;
  left: 90%;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.communityCard.button};
  color: #FFFF;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    background: ${({theme}) => theme.linkHover};
  }
`;
