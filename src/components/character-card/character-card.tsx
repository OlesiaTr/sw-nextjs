import type { FC } from 'react';

import type { Character } from '@/helpers';

export interface Props {
  character: Character;
  onCharacterClick: (id: number) => void;
}

const CharacterCard: FC<Props> = ({ character, onCharacterClick }) => {
  const {
    name,
    gender,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    homeworld,
    id,
  } = character;

  const handleClick = () => {
    onCharacterClick(id);
  };

  const CHARACTER_CARD_TEST_ID = `character-card-${id}-test-id`;

  return (
    <li
      onClick={handleClick}
      data-testid={CHARACTER_CARD_TEST_ID}
      className="flex w-[400px] cursor-pointer flex-col justify-between rounded-xl bg-white p-5 shadow transition hover:scale-95 hover:bg-custom-gradient"
    >
      <div className="mb-3 flex justify-between">
        <h3 className="text-2xl font-black uppercase text-accent">{name}</h3>
        <p className="text-lg font-medium uppercase">{gender}</p>
      </div>
      <div className="rounded-sm border-borderGray bg-mainGray px-3 py-1">
        <div className="mb-3 flex flex-wrap justify-between font-medium">
          <p className="mb-2 w-1/2">
            <span className="font-semibold">Birth Year:</span> {birth_year}
          </p>
          <p className="mb-2 w-1/2">
            <span className="font-semibold">Height:</span> {height} cm
          </p>
          <p className="mb-2 w-1/2">
            <span className="font-semibold">Mass:</span> {mass} kg
          </p>
          <p className="mb-2 w-1/2">
            <span className="font-semibold">Hair Color:</span> {hair_color}
          </p>
          <p className="mb-2 w-1/2">
            <span className="font-semibold">Skin Color:</span> {skin_color}
          </p>
          <p className="mb-2 w-1/2">
            <span className="font-semibold">Eye Color:</span> {eye_color}
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Homeworld: {homeworld}</p>
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
