import { TrashIcon } from "../../assets/iconComponents/icon-trash";
import "./AddPostForm.css";

export const AddPostForm = ({ handleHideAddForm}) => {
  return (
    <>
      <form action="" className="addPostForm">
        <div className="modalHeader">
        <h2>Создать пост</h2>
        <button onClick={handleHideAddForm} className="secondaryBtn">
        <TrashIcon />
        </button>
        
        </div>
        
        <div>
          <input
            className="inputClass"
            type="text"
            name="postTitle"
            placeholder="Заголовок поста"
          />
        </div>
        <div>
          <textarea
            className="inputClass"
            name="postDescription"
            placeholder="Содержание поста"
          />
        </div>
        <div>
          <button onClick={handleHideAddForm} className="accentBtn" type="button">
            Добавить пост
          </button>
        </div>
      </form>
      <div onClick={handleHideAddForm} className="overlay"></div>
    </>
  );
};
