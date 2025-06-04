import { format, formatDistanceToNow } from "date-fns";
import {
  AreaContainer,
  AuthorInfo,
  Content,
  CommentForm,
  FeedBack,
  TextArea,
  SubmitButton,
  LikeButton,
} from "./styles";
import { ptBR } from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
} from "react-icons/fa";
import { CommentArea } from "../CommentArea/CommentArea";
import { v4 as uuidv4 } from "uuid";

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
  id: string;
  author: Author;
  publishedAt: Date;
  content: ContentItem[];
}

export function PostArea({ id, author, publishedAt, content }: PostProps) {
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

  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${id}`);
    if (storedComments) {
      try {
        const parsed = JSON.parse(storedComments);
        const converted = parsed.map((comment: any) => ({
          ...comment,
          publishedAt: new Date(comment.publishedAt),
        }));
        setComments(converted);
      } catch (err) {
        console.error("Erro ao carregar comentários:", err);
        setComments([]);
      }
    }
  }, [id]);

  function handleNewComment(event: React.FormEvent) {
    event.preventDefault();

    if (newCommentText.trim() === "") return;

    const newComment: Comment = {
      id: uuidv4(),
      content: newCommentText.trim(),
      publishedAt: new Date(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments)); // salva direto
    setNewCommentText("");
  }

  function deleteComment(commentToDelete: string) {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentToDelete
    );
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments)); // salva direto
  }

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!id) return;

    const storedLikes = localStorage.getItem(`likes-${id}`);
    const storedIsLiked = localStorage.getItem(`isLiked-${id}`);

    if (storedLikes) {
      setLikes(Number(storedLikes));
    }

    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }
  }, [id]);

  function handleToggleLike() {
    if (!id) return;

    if (isLiked) {
      const newLikes = likes - 1;
      setLikes(newLikes);
      setIsLiked(false);
      localStorage.setItem(`likes-${id}`, String(newLikes));
      localStorage.setItem(`isLiked-${id}`, "false");
    } else {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setIsLiked(true);
      localStorage.setItem(`likes-${id}`, String(newLikes));
      localStorage.setItem(`isLiked-${id}`, "true");
    }
  }

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
        <LikeButton liked={isLiked} onClick={handleToggleLike}>
          {isLiked ? <FaHeart /> : <FaRegHeart />} {likes}
        </LikeButton>

        <button>
          <FaRegComment /> {comments.length}
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
