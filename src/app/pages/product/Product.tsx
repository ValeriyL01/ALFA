import styles from "./Product.module.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../../api/getCharacter";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/backButton/BackButton";
import { Loading } from "../../components/loading/Loading";
import { useStore } from "../../../stores/store";

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { createCharacters } = useStore((state) => state);

  const character = createCharacters.find((char) => char.id.toString() === id);

  const { data, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id || ""),
    enabled: !character,
  });

  const characterToDisplay = character || data;

  if (isLoading || !characterToDisplay) {
    return <Loading />;
  }

  return (
    <>
      <BackButton />
      <h3 className={styles.title}>{characterToDisplay.name}</h3>
      <img
        className={styles.images}
        src={characterToDisplay.image}
        alt={characterToDisplay.name}
      />
      <p>Статус: {characterToDisplay.status}</p>
      <p>Вид: {characterToDisplay.species}</p>
      <p>Пол: {characterToDisplay.gender}</p>
      <p>Место происхождения: {characterToDisplay.origin.name}</p>
      <p>Местоположение: {characterToDisplay.location.name}</p>
    </>
  );
};
