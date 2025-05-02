import styled from "styled-components";
import { TbCameraPlus } from "react-icons/tb";

// Modal styles
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  border-radius: 35px;
  width: 40vw;
  height: 90vh;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 90;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme.communityCreation.text};
    margin-bottom: 1rem;
  }

  span {
    color: #0b5fff;
  }
`;

export const PictureArea = styled.div`
  width: 11.5rem;
  height: 11.5rem;
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
  transition: all 0.3s ease-in;

  span {
    font-size: 20px;
    font-weight: 900;
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in;
  }
`;

export const StyledCamera = styled(TbCameraPlus)`
  font-size: 3.5rem;
  transition: transform 0.4s ease;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 35px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
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
    padding: 7px;
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
`;

export const Field = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  input {
    margin-left: 2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  button{
    font-size: 24px;
    font-weight: 700;
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

  .cancel{
    background: none;
    color: #CE4848;
    border: 2px solid #CE4848;
    transition: all 0.5s ease;

    &:hover{
      color: #F40600;
      border: 2px solid #F40600;
      transition: all 0.5s ease;
    }
  }

  .create{
    background: #0B5FFF;
    color: #FFFF;
    transition: all 0.5s ease;

    &:hover{
      transition: all 0.5s ease;
      opacity: 0.7;
    }
  }

`;
