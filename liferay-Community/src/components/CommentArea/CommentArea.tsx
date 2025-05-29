import {
  AuthorAndTime,
  ButtonDelete,
  CommentBox,
  CommentContainer,
  CommentContent,
} from "./styles";
import userImage from "../../assets/user-image.svg";
import { FaRegTrashAlt } from "react-icons/fa";

export function CommentArea({ content, onDeleteComment, publishedAt }) {
  function handleDeleteComment() {
    event.preventDefault();
    onDeleteComment(content);
  }

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
                title="02 de Fevereiro às 20:50"
                dateTime="2025-02-02 20:50:20"
              >
                Cerca de 2 meses
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
