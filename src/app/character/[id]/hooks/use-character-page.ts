import { Character, loadCharacter } from '@/helpers';
import { useEffect, useState } from 'react';

export const useCharacterPage = (characterId: number) => {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    loadCharacter({
      setLoading,
      setCharacter,
      characterId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, character };
};
