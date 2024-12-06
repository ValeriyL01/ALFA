import { Link } from "react-router-dom";
import { useStore } from "../../../stores/store";
import { Character } from "../../api/getCharacters";
import { Like } from "../../icons/Like";
import styles from "./Card.module.scss";
import { Delete } from "../../icons/Delete";
interface CharacterProp {
  character: Character;
}
export const Card: React.FC<CharacterProp> = ({ character }) => {
  const { removeCharacter, toggleLikeCharacter, likeCharacters } = useStore();
  const isLiked = likeCharacters.some((item) => item.id === character.id);
  return (
    <div className={styles.card}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        key={character.id}
        to={`/products/${character.id}`}
      >
        <h3 className={styles.cardName}>{character.name}</h3>
        <img
          className={styles.cardImage}
          src={character.image}
          alt={character.name}
        />
      </Link>
      <div className={styles.cardButtonContainer}>
        <button
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation();
            removeCharacter(character.id);
          }}
        >
          <Delete></Delete>
        </button>
        <button
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation();
            toggleLikeCharacter(character);
          }}
        >
          <Like isLiked={isLiked}></Like>
        </button>
      </div>
    </div>
  );
};
