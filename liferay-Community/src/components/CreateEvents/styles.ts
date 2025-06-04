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
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.background};
  padding: 0;
  border-radius: 35px;
  width: 45vw;
  height: auto;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  z-index: 90;
  overflow: hidden;

  h3 {
    color: ${(props) => props.theme.communityCreation.text};
    margin-bottom: 1rem;
  }

  @media (max-width: 1200px) {
    width: 60vw;
  }

  @media (max-width: 992px) {
    width: 75vw;
  }

  @media (max-width: 768px) {
    width: 95vw;
    max-height: 95vh;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.communityCreation.text};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2.8rem;
  color: ${(props) => props.theme.communityCard.paragraph};
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.danger};
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  flex-grow: 1;
  justify-content: flex-start;
  overflow-y: auto;

  .row-group {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .half-width {
    flex: 1;
    min-width: 200px;

    @media (max-width: 768px) {
      min-width: auto;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${(props) => props.theme.communityCreation.text};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  padding: 10px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
  font-size: 18px;
  color: ${(props) => props.theme.communityCreation.text};
  
  &:focus {
    border-color: ${(props) => props.theme.text};
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.lightText};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px;
  }
`;

export const DateTimeInputGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;

  input[type='date'],
  input[type='time'] {
    background: none;
    border: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
    color: ${(props) => props.theme.communityCreation.text};

    &:focus {
      border-color: ${(props) => props.theme.text};
      outline: none;
      box-shadow: none;
    }

    &::-webkit-calendar-picker-indicator {
      filter: invert(1) brightness(2);
      cursor: pointer;
    }

    &[type="date"]::-webkit-calendar-picker-indicator,
    &[type="time"]::-webkit-calendar-picker-indicator {
      filter: invert(1) brightness(2);
    }

    &[type="date"]::-moz-calendar-picker-indicator,
    &[type="time"]::-moz-time-picker-indicator {
      filter: invert(1) brightness(2);
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 10px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      padding: 8px;
    }
  }

  input[type='time'] {
    width: 180px;
    min-width: 180px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 160px;
      min-width: 160px;
    }

    @media (max-width: 480px) {
      width: 140px;
      min-width: 140px;
    }
  }

  input[type='date'] {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    
    input[type='time'] {
      width: 100%;
      min-width: auto;
    }
  }
`;

export const DateTimeInput = styled(Input)`
  border: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
  border-radius: 10px;
  padding: 12px;
  
  &:focus {
    border-color: ${(props) => props.theme.text};
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1) brightness(2);
    cursor: pointer;
  }

  &[type="date"]::-webkit-calendar-picker-indicator,
  &[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(1) brightness(2);
  }

  &[type="date"]::-moz-calendar-picker-indicator,
  &[type="time"]::-moz-time-picker-indicator {
    filter: invert(1) brightness(2);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 10px;
  height: 18rem;
  border: 2px solid ${(props) => props.theme.communityCreation.inputBorder};
  background: none;
  padding: 10px;
  color: ${(props) => props.theme.communityCreation.text};
  font-size: 18px;

  @media (max-width: 768px) {
    height: 12rem;
    font-size: 16px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    height: 10rem;
    font-size: 14px;
    padding: 6px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.border};
  background: none;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Button = styled.button<{ variant: 'create' | 'cancel' }>`
  font-size: 22px;
  font-weight: 700;
  width: 13rem;
  height: 3.5rem;
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

  @media (max-width: 768px) {
    font-size: 18px;
    width: 11rem;
    height: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: 100%;
    height: 2.75rem;
  }
`;

export const PictureArea = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 35px;
  color: ${(props) => props.theme.communityCreation.pictureArea};
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 999;
  transition: all 0.3s ease-in;

  span {
    font-size: 22px;
    font-weight: 900;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    width: 8rem;
    height: 8rem;
    border-radius: 20px;
  }
`;

export const StyledCamera = styled(TbCameraPlus)`
  font-size: 4.5rem;
  transition: transform 0.4s ease;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 35px;

  @media (max-width: 768px) {
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
  }
`;