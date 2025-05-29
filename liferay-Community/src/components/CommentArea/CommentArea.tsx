import {
  AuthorAndTime,
  ButtonDelete,
  CommentBox,
  CommentContainer,
  CommentContent,
} from "./styles";
import userImage from "../../assets/user-image.svg";
import { FaRegTrashAlt } from "react-icons/fa";
import React from 'react';
import { formatDistanceToNow } from 'date-fns'; 
import { ptBR } from 'date-fns/locale'; 


interface CommentAreaProps {
  content: string;
  onDeleteComment: (commentContent: string) => void;
  publishedAt: Date; 
}

export function CommentArea({ content, onDeleteComment, publishedAt }: CommentAreaProps) {
  
  function handleDeleteComment(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onDeleteComment(content);
  }

  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, 
    addSuffix: true, 
  });

  return (
    <CommentContainer>
      <img src={userImage} alt="" />
      <CommentBox>
        <CommentContent>
          <header>
            <AuthorAndTime>
              <div>
                <strong>Rhodrigo Rodrigues</strong>
                <span>@rhodrigo081</span>
              </div>
              <time
                // Usar publishedAt para o title e dateTime
                title={publishedAt.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow} {/* Exibir a data formatada */}
              </time>
            </AuthorAndTime>
            <ButtonDelete onClick={handleDeleteComment}>
              <FaRegTrashAlt />
            </ButtonDelete>
          </header>
          <p>{content}</p>
        </CommentContent>
      </CommentBox>
    </CommentContainer>
  );
}