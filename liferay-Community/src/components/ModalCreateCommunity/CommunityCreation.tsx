import { useState } from "react";
import {
  ModalContainer,
  ModalContent,
  PictureArea,
  StyledCamera,
  ImagePreview,
  Form,
  Field,
  CheckBoxGroup,
  ButtonGroup,
} from "./styles";

interface CommunityCreationProps {
  closeModal: () => void;
}

export function CommunityCreation({ closeModal }: CommunityCreationProps) {
  const [image, setImage] = useState(null);

  const handleUpdateImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClickPictureArea = () => {
    document.getElementById("foto").click();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h1>
          Nova <span>Comunidade</span>
        </h1>

        <PictureArea onClick={handleClickPictureArea}>
          {image ? (
            <ImagePreview src={image} alt="Imagem da comunidade" />
          ) : (
            <>
              <StyledCamera />
              <span>Adicionar Foto</span>
            </>
          )}

          <input
            id="foto"
            type="file"
            accept="image/*"
            onChange={handleUpdateImage}
            style={{ display: "none" }}
          />
        </PictureArea>

        <Form>
          <Field>
            <label htmlFor="nome">Nome da Comunidade</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite o nome da comunidade"
            />
          </Field>
          <Field>
            <label htmlFor="descricao">Descrição da Comunidade</label>
            <textarea
              id="descricao"
              placeholder="Adicione a descrição da comunidade"
            />
          </Field>
        </Form>

        <ButtonGroup>
          <button className="cancel" onClick={closeModal}>Cancelar</button>
          <button className="create"> Criar</button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
}
