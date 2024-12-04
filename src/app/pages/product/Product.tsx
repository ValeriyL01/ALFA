import styles from "./Product.module.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../../api/getCharacter";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/backButton/BackButton";
import { Loading } from "../../components/loading/Loading";

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id || ""),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <BackButton></BackButton>

      <h1>{character?.name}</h1>
      <img src={character?.image} alt={character?.name} />
      <p>Статус: {character?.status}</p>
      <p>Вид: {character?.species}</p>
      <p>Пол: {character?.gender}</p>
      <p>Место происхождения: {character?.origin.name}</p>
      <p>Местоположение: {character?.location.name}</p>
    </>
  );
};
