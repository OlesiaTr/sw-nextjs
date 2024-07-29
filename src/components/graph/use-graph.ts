import {
  type Character,
  type Film,
  getGraphData,
  loadCharacter,
  loadFilms,
  loadStarships,
  type Starship,
} from '@/helpers';
import { useEffect, useState } from 'react';

interface Edge {
  id: string;
  source: string;
  target: string;
}

interface Node {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
}

export const useGraph = (characterId: number) => {
  const [_, setLoading] = useState(false);
  const [character, setCharacter] = useState<Character>();
  const [filmsList, setFilmsList] = useState<Film[]>();
  const [starships, setStarships] = useState<Starship[]>();
  const [nodes, setNodes] = useState<Node[]>();
  const [edges, setEdges] = useState<Edge[]>();

  useEffect(() => {
    loadCharacter({
      setLoading,
      setCharacter,
      characterId,
    });

    loadFilms({
      setLoading,
      setFilmsList,
      characterId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (character) {
      loadStarships({
        setLoading,
        setStarships,
        starshipsIds: character.starships,
      });
    }
  }, [character]);

  useEffect(() => {
    if (character && filmsList && starships) {
      const { overallNodes, overallEdges } = getGraphData(
        character,
        filmsList,
        starships,
      );

      setNodes(overallNodes);
      setEdges(overallEdges);
    }
  }, [character, filmsList, starships]);

  return { nodes, edges };
};
