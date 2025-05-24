import { useRef, useState } from "react";
import {
  ModalContainer,
  ModalContent,
  PictureArea,
  StyledCamera,
  ImagePreview,
  Form,
  Field,
  ButtonGroup,
} from "./styles";
import defaultCover from "../../assets/default-cover.svg";
import { v4 as uuidv4 } from "uuid";

interface CommunityCreationProps {
  closeModal: () => void;
  addCard: (newCard: {
    id: string;
    cover: string;
    title: string;
    description: string;
    members: number;
    category: string;
    joined: boolean;
  }) => void;
}

export function CommunityCreation({
  closeModal,
  addCard,
}: CommunityCreationProps) {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleUpdateImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Por favor, escolha uma imagem válida.");
    }
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCreate = () => {
    if (!title || !description || !category) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newId = uuidv4();

    addCard({
      id: newId,
      cover: image || defaultCover,
      title,
      description,
      members: 1,
      category,
    });
    closeModal();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h1>
          Nova <span>Comunidade</span>
        </h1>

        <PictureArea
          onClick={(event) => {
            fileInputRef.current?.click();
          }}
        >
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
            ref={fileInputRef}
          />
        </PictureArea>

        <Form>
          <Field>
            <label htmlFor="name">Nome da Comunidade</label>
            <input
              id="name"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o nome da comunidade"
            />
          </Field>
          <Field>
            <label htmlFor="description">Descrição da Comunidade</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Adicione a descrição da comunidade"
            />
          </Field>
          <Field>
            <label htmlFor="category"> Categoria: </label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled selected>
                Selecione uma categoria
              </option>
              <option value="Esportes">Esportes</option>
              <option value="Jogos">Jogos</option>
              <option value="Leitura e Ensino">Leitura e Ensino</option>
              <option value="Voluntariado">Voluntariado</option>
              <option value="Música">Música</option>
              <option value="Trabalho">Trabalho</option>
            </select>
          </Field>
        </Form>

        <ButtonGroup>
          <button className="cancel" onClick={closeModal}>
            Cancelar
          </button>
          <button className="create" onClick={handleCreate}>
            Criar
          </button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
}
