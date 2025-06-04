import { PostButton, PostContainer, PostForm, TextArea } from "./styles";
import userImage from "../../assets/user-image.svg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface PostProps {
  onPostCreate: (post: {
    id:string;
    author: {
      image: string;
      name: string;
      username: string;
    };
    content: { type: "paragraph"; content: string }[];
    publishedAt: Date;
  }) => void;
}

export function Post({ onPostCreate }: PostProps) {
  const [content, setContent] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (content.trim() === "") return;

    onPostCreate({
      id: uuidv4(),
      author: {
        image: userImage,
        name: "Carlos Eduardo",
        username: "@CarlosEduardo",
      },
      content: [{ type: "paragraph", content: content }],
      publishedAt: new Date(),
    });

    setContent(""); // Limpa o campo de texto após enviar
  }

  return (
    <PostContainer>
      <img src={userImage} alt="" />
      <PostForm onSubmit={handleSubmit}>
        <TextArea
          placeholder="O que você quer compartilhar hoje?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <PostButton type="submit">Publicar</PostButton>
      </PostForm>
    </PostContainer>
  );
}
