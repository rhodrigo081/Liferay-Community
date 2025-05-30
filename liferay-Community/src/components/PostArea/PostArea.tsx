import { format, formatDistanceToNow } from "date-fns";
import {
  AreaContainer,
  AuthorInfo,
  Content,
  CommentForm,
  FeedBack,
  TextArea,
  SubmitButton,
} from "./styles";
import { ptBR } from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { CommentArea } from "../CommentArea/CommentArea";

interface Author {
  image: string;
  name: string;
  username: string;
}

interface ContentItem {
  type: "paragraph" | "link";
  content: string;
}

interface Comment {
  id: string;
  content: string;
  publishedAt: Date;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: ContentItem[];
}

export function PostArea({ author, publishedAt, content }: PostProps) {
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

  // Removido localStorage e usando apenas estado local
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleNewComment(event: React.FormEvent) {
    event.preventDefault();
    
    if (newCommentText.trim() === "") {
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(), // ID simples baseado em timestamp
      content: newCommentText.trim(),
      publishedAt: new Date()
    };

    setComments(prevComments => [...prevComments, newComment]);
    setNewCommentText("");
  }

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    setComments(prevComments => 
      prevComments.filter(comment => comment.id !== commentToDelete)
    );
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  return (
    <AreaContainer>
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
          <SubmitButton type="submit">Comentar</SubmitButton>
        </footer>
      </CommentForm>
      <>
        {comments.map((comment) => {
          return (
            <CommentArea
              key={comment.id}
              content={comment.content}
              publishedAt={comment.publishedAt}
              onDeleteComment={() => deleteComment(comment.id)}
            />
          );
        })}
      </>
    </AreaContainer>
  );
}