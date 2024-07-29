import type { FC } from 'react';

import { Character } from '@/helpers';

interface Props {
  character: Character;
}

const CharacterFullInfo: FC<Props> = ({ character }) => {
  const {
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    homeworld,
  } = character;

  return (
    <div className="flex flex-col items-start rounded-sm border-borderGray bg-mainGray px-3 py-1">
      <p className="mb-3 text-2xl font-bold">Homeworld: {homeworld}</p>

      <div className="mb-3 flex flex-wrap justify-between font-medium">
        <p className="w-1/2">
          <span className="font-semibold">Birth Year:</span> {birth_year}
        </p>
        <p className="w-1/2">
          <span className="font-semibold">Height:</span> {height} cm
        </p>
        <p className="w-1/2">
          <span className="font-semibold">Mass:</span> {mass} kg
        </p>
        <p className="w-1/2">
          <span className="font-semibold">Hair Color:</span> {hair_color}
        </p>
        <p className="w-1/2">
          <span className="font-semibold">Skin Color:</span> {skin_color}
        </p>
        <p className="w-1/2">
          <span className="font-semibold">Eye Color:</span> {eye_color}
        </p>
      </div>
    </div>
  );
};

export default CharacterFullInfo;
