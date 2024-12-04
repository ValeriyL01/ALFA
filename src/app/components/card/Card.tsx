import { useStore } from "../../../stores/store";
import { Character } from "../../api/getCharacters";
import { Like } from "../../icons/Like";
import styles from "./Card.module.scss";
interface CharacterProp {
  character: Character;
}
export const Card: React.FC<CharacterProp> = ({ character }) => {
  const { removeCharacter, toggleLikeCharacter, likeCharacters } = useStore();
  const isLiked = likeCharacters.some((item) => item.id === character.id);
  return (
    <div className={styles.card}>
      <h3 className={styles.cardName}>{character.name}</h3>
      <img
        className={styles.cardImage}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.cardButtonContainer}>
        <button
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation();
            removeCharacter(character.id);
          }}
        >
          🗑️
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
