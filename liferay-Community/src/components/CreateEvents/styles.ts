import { TbCameraPlus } from 'react-icons/tb';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(0.2rem);
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2.5rem; /* Aumentado um pouco o padding geral do conteúdo */
  border-radius: 35px;
  width: 45vw; /* Aumentado a largura para preencher mais */
  height: 90vh;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Melhor para distribuir itens verticalmente no espaço */
  align-items: center;
  z-index: 90;
  gap: 1.5rem; /* Aumentado o gap entre as seções principais (Header, Body, Footer) */

  h3 {
    color: ${(props) => props.theme.communityCreation.text};
    margin-bottom: 1rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.8rem; /* Aumentado o padding do header */
  border-bottom: 1px solid ${(props) => props.theme.border};
  width: 100%;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 2.2rem; /* Aumentado o tamanho da fonte do título */
  font-weight: 700;
  color: ${(props) => props.theme.communityCreation.text};
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2.8rem; /* Aumentado o tamanho do botão de fechar */
  color: ${(props) => props.theme.communityCard.paragraph};
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.danger};
  }
`;

export const ModalBody = styled.div`
  padding: 2rem; /* Aumentado o padding interno do corpo */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Aumentado o gap entre os FormGroup */
  width: 100%;
  flex-grow: 1;
  justify-content: center; /* Mantido para centralizar os grupos se houver espaço */


  .row-group {
    display: flex;
    gap: 2rem; /* Aumentado o gap em grupos de linha */
    flex-wrap: wrap;
  }

  .half-width {
    flex: 1;
    min-width: 200px; /* Aumentado o min-width para os campos horizontais */
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Aumentado o gap entre label e input */
`;

export const Label = styled.label`
  font-size: 18px; /* Aumentado o tamanho da fonte dos rótulos */
  color: ${(props) => props.theme.communityCreation.text};
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  padding: 10px; /* Aumentado o padding do input */
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
  font-size: 18px; /* Aumentado o tamanho da fonte do input */
  color: ${(props) => props.theme.communityCreation.text};
  &:focus {
    border-color: ${(props) => props.theme.text};
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.lightText};
  }
`;

export const DateTimeInputGroup = styled.div`
  display: flex;
  gap: 1.5rem; /* Aumentado o gap entre os campos de data e hora */

  input[type='date'],
  input[type='time'] {
    ${Input}
    flex: 1;
    border: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
    border-radius: 10px;
    padding: 12px; /* Aumentado o padding dos inputs de data/hora */

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
    }

    &[type="date"]::-moz-calendar-picker-indicator,
    &[type="time"]::-moz-time-picker-indicator {
        filter: invert(1);
    }
  }
`;

export const DateTimeInput = styled(Input)``;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 10px;
  height: 18rem; /* Aumentado a altura do textarea */
  border: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
  background: none;
  padding: 10px;
  color: ${(props) => props.theme.communityCreation.text};
  font-size: 18px; /* Aumentado o tamanho da fonte do textarea */
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem; /* Aumentado o gap entre os botões */
  padding: 1.5rem 2rem; /* Aumentado o padding do footer */
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.border};
  background: none;
`;

export const Button = styled.button<{ variant: 'create' | 'cancel' }>`
  font-size: 22px; /* Aumentado o tamanho da fonte dos botões */
  font-weight: 700;
  width: 13rem; /* Aumentado a largura dos botões */
  height: 3.5rem; /* Aumentado a altura dos botões */
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2000;
  transition: all 0.5s ease;

  ${(props) =>
    props.variant === 'create' &&
    `
    background: #0b5fff;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  `}

  ${(props) =>
    props.variant === 'cancel' &&
    `
    background: none;
    color: ${props.theme.danger};
    border: 2px solid ${props.theme.danger};

    &:hover {
      color: ${props.theme.hoverdanger};
      border: 2px solid ${props.theme.hoverdanger};
    }
  `}
`;

export const PictureArea = styled.div`
  width: 13rem; /* Aumentado a largura da área da imagem */
  height: 13rem; /* Aumentado a altura da área da imagem */
  border-radius: 35px;
  color: ${(props) => props.theme.communityCreation.pictureArea};
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* Aumentado o gap interno da área da imagem */
  cursor: pointer;
  position: relative;
  z-index: 999;
  transition: all 0.3s ease-in;

  span {
    font-size: 22px; /* Aumentado o tamanho da fonte do texto */
    font-weight: 900;
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in;
  }
`;

export const StyledCamera = styled(TbCameraPlus)`
  font-size: 4.5rem; /* Aumentado o tamanho do ícone da câmera */
  transition: transform 0.4s ease;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 35px;
`;