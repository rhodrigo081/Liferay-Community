import { format, formatDistanceToNow } from "date-fns";
import {
  PostContainer,
  AuthorInfo,
  Content,
  CommentForm,
  FeedBack,
  TextArea,
  SubmitButton,
} from "./styles";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";

interface Author {
  image: string;
  name: string;
  username: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const publishedDateFormate = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleNewComment(event: React.FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <PostContainer>
      <header>
        <AuthorInfo>
          <img src={author.image} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.username}</span>
          </div>
        </AuthorInfo>
        <time title={publishedDateFormate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <Content>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </Content>
      <FeedBack>
        {" "}
        <button>
          <FaRegHeart /> 0
        </button>
        <button>
          <FaRegComment /> {comments.length}
        </button>
        <button>
          <FaRegPaperPlane />
        </button>
      </FeedBack>
      <CommentForm onSubmit={handleNewComment}>
        <h4>Deixe seu feedback</h4>
        <TextArea
          name="comment"
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleCommentChange}
          required
        />
        <footer className={isNewCommentEmpty ? "hidden" : "visible"}>
          <SubmitButton type="submit">Publicar</SubmitButton>
        </footer>
      </CommentForm>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </PostContainer>
  );
}
