import axios from "axios";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export const fetchCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении персонажей:", error);
    throw error;
  }
};
