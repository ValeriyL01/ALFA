import { create } from "zustand";

interface Character {
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

interface StoreState {
  characters: Character[];
  likeCharacters: Character[];
  createCharacters: Character[];
  addCharacter: (character: Character) => void;
  removeCharacter: (id: number) => void;
  toggleLikeCharacter: (character: Character) => void;
  setCharacters: (characters: Character[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  characters: [],
  likeCharacters: [],
  createCharacters: [],
  addCharacter: (character) =>
    set((state) => ({
      createCharacters: [...state.createCharacters, character],
    })),
  removeCharacter: (id) =>
    set((state) => ({
      characters: state.characters.filter((character) => character.id !== id),
    })),
  toggleLikeCharacter: (character) =>
    set((state) => {
      const isLiked = state.likeCharacters.some(
        (item) => item.id === character.id
      );
      if (isLiked) {
        return {
          likeCharacters: state.likeCharacters.filter(
            (item) => item.id !== character.id
          ),
        };
      } else {
        return { likeCharacters: [...state.likeCharacters, character] };
      }
    }),
  setCharacters: (characters) =>
    set((state) => ({
      characters: [...characters, ...state.createCharacters],
    })),
}));
