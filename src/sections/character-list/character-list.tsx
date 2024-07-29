import type { FC } from 'react';

import { CharacterCard } from '@/components/character-card';
import type { Character } from '@/helpers';

import { CHARACTER_LIST_TEST_ID } from './constants';

interface Props {
  list: Character[];
  onClick: (id: number) => void;
}

const CharacterList: FC<Props> = ({ list, onClick }) => {
  return (
    <ul
      data-testid={CHARACTER_LIST_TEST_ID}
      className="m-auto grid max-w-[calc(100vw-100px)] grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 xl:grid-cols-3"
    >
      {list.map(character => (
        <CharacterCard
          key={character.name}
          character={character}
          onCharacterClick={onClick}
        />
      ))}
    </ul>
  );
};

export default CharacterList;
