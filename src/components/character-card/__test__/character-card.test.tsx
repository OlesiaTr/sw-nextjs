import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import CharacterCard from '../character-card';
import type { Character } from '@/helpers';

describe('CharacterCard', () => {
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

  const renderCharacterCard = () =>
    render(
      <CharacterCard
        character={MOCK_CHARACTER}
        onCharacterClick={MOCK_FUNCTION}
      />,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders character details correctly', () => {
    const { asFragment } = renderCharacterCard();

    expect(screen.getByText(MOCK_CHARACTER.name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_CHARACTER.gender)).toBeInTheDocument();
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

  it('calls onCharacterClick with the correct id when clicked', () => {
    renderCharacterCard();

    const card = screen.getByTestId(
      `character-card-${MOCK_CHARACTER.id}-test-id`,
    );

    if (card) {
      fireEvent.click(card);
      expect(MOCK_FUNCTION).toHaveBeenCalledWith(MOCK_CHARACTER.id);
    }
  });
});
