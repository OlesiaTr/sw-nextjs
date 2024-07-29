import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CharacterFullInfo from '../character-full-info';
import type { Character } from '@/helpers';

describe('CharacterFullInfo', () => {
  const MOCK_FUNCTION = jest.fn();
  const MOCK_CHARACTER: Character = {
    name: 'Luke Skywalker',
    gender: 'male',
    birth_year: '19BBY',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    homeworld: 20,
    id: 1,
    created: '2014-12-10T16:16:29.192000Z',
    edited: '2014-12-20T21:17:50.325000Z',
    films: [1, 2, 3, 4, 5, 6],
    species: [1],
    starships: [48, 59, 64, 65, 74],
    url: 'https://sw-api.starnavi.io/people/1/',
    vehicles: [38],
  };

  const renderCharacterFullInfo = () =>
    render(
      <CharacterFullInfo
        character={MOCK_CHARACTER}
        onCharacterClick={MOCK_FUNCTION}
      />,
    );

  it('renders character details correctly', () => {
    const { asFragment } = renderCharacterFullInfo();

    expect(screen.getByText(MOCK_CHARACTER.birth_year)).toBeInTheDocument();
    expect(screen.getByText(MOCK_CHARACTER.height + ' cm')).toBeInTheDocument();
    expect(screen.getByText(MOCK_CHARACTER.mass + ' kg')).toBeInTheDocument();
    expect(screen.getByText(MOCK_CHARACTER.hair_color)).toBeInTheDocument();
    expect(screen.getByText(MOCK_CHARACTER.skin_color)).toBeInTheDocument();
    expect(screen.getByText(MOCK_CHARACTER.eye_color)).toBeInTheDocument();
    expect(
      screen.getByText('Homeworld: ' + MOCK_CHARACTER.homeworld),
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
