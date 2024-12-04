import styles from "./Products.module.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../../api/getCharacters";
import { useStore } from "../../../stores/store";
import { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";

export const Products: React.FC = () => {
  const { data: characters, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  const setCharacters = useStore((state) => state.setCharacters);
  const likeCharacters = useStore((state) => state.likeCharacters);
  const charactersStore = useStore((state) => state.characters);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  useEffect(() => {
    if (characters) {
      setCharacters(characters);
    }
  }, [characters, setCharacters]);

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  const filteredCharacters = showFavorites ? likeCharacters : charactersStore;

  const handleShowAll = () => setShowFavorites(false);
  const handleShowFavorites = () => setShowFavorites(true);

  return (
    <>
      <div className={styles.filterButtons}>
        <button className={styles.button} onClick={handleShowAll}>
          Все
        </button>
        <button className={styles.button} onClick={handleShowFavorites}>
          Избранное
        </button>
      </div>
      <div className={styles.productsContainer}>
        {filteredCharacters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </>
  );
};
