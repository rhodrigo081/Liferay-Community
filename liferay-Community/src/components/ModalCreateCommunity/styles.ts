import styled from "styled-components";
import { TbCameraPlus } from "react-icons/tb";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2rem;
  padding-bottom: 25%;
  border-radius: 35px;
  width: 40%;
  height:105%;
  margin-top: 105%;
  margin-bottom: 105%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 80;
  gap: 0.25rem;

  h1 {
    color: ${(props) => props.theme.communityCreation.text};
    margin-bottom: 1rem;
  }

  span {
    color: #0b5fff;
  }

  @media (max-width: 1360px) {
    gap: 0.5rem;
    height:80%;
    margin-top: 105%;
    margin-bottom: 105%;

    h1{
      margin-bottom: 0.5rem;
    }
  }
`;

export const PictureArea = styled.div`
  width: 85%;
  height: 90%;
  border-radius: 35px;
  color: ${(props) => props.theme.communityCreation.pictureArea};
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  position: relative;
  z-index: 999; 
  transition: all 0.3s ease-in;

  span {
    font-size: 1.4rem;
    font-weight: 900;
    @media (max-width: 1360px){
      font-size: 1rem;
    }
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in;
  }
`;

export const StyledCamera = styled(TbCameraPlus)`
  font-size: 3.5rem;
  transition: transform 0.4s ease;

  @media (max-width: 1360px){
    font-size: 2rem;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 35px;
  object-fit: cover;
  object-position: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;

  label {
    color: ${(props) => props.theme.communityCreation.text};
    font-weight: 700;
    font-size: 16px;
  }

  input,
  textarea {
    width: 100%;
    background: none;
    padding: 0.6rem 0.2rem 0.3rem 0.6rem;
    color: ${(props) => props.theme.communityCreation.text};
    font-size: 16px;
  }

  input {
    border: none;
    border-bottom: 2px solid
      ${(props) => props.theme.communityCreation.inputBorder};
  }

  textarea {
    resize: none;
    border-radius: 10px;
    height: 14.6rem;
    border: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
  }

  :last-child {
    display: flex;
    flex-direction: row;
    gap: 20%;

    select {
      font-size: 1.1rem;
      font-weight: 900;
      padding: 1rem;
      background: none;
      color: #0b5fff;
      border: 2px solid #0b5fff;
      border-radius: 8px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    select:hover {
      transition: all 0.3s ease-in-out;
      opacity: 0.7;
    }
  }

  @media(max-width: 1360px){
    gap: 1rem;
    textarea{
      height: 7rem;
    }
  }
`;

export const Field = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: 1360px){
    gap: 0.2rem;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  button {
    font-size: 24px;
    font-weight: 700;
    margin-top: 0.5rem;
    width: 11.5rem;
    height: 2.8rem;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2000;
  }

  .cancel {
    background: none;
    color: #ce4848;
    border: 2px solid #ce4848;
    transition: all 0.5s ease;

    &:hover {
      color: #f40600;
      border: 2px solid #f40600;
      transition: all 0.5s ease;
    }
  }

  .create {
    background: #0b5fff;
    color: #ffff;
    transition: all 0.5s ease;

    &:hover {
      transition: all 0.5s ease;
      opacity: 0.7;
    }
  }
`;


