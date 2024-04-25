import { Image } from "../App/App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  picture: Image;
  handleOpen: (url: string, alt: string) => void;
}

const ImageCard = ({ picture, handleOpen }: ImageCardProps) => {
  console.log(picture);
  // при кліку на картинку (div) спрацьовує функція handleOpen в яку ми передаємо посилання на велике зображення і текст опису фото.
  // Ця функція оголошена в App і робить наступне: setShowModal(true); setModalUrl(url); setModalAlt(alt); - викликає сеттери.
  return (
    <div
      onClick={() => handleOpen(picture.urls.regular, picture.alt_description)}
    >
      <img
        className={css.image}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
    </div>
  );
};

export default ImageCard;
