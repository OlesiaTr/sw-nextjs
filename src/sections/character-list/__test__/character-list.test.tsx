import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import CharacterList from '../character-list';
import { CHARACTER_LIST_TEST_ID } from '../constants';
import type { Character } from '@/helpers';

describe('CharacterList', () => {
  const MOCK_FUNCTION = jest.fn();
  const MOCK_LIST: Character[] = [
    {
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
    },
    {
      name: 'Darth Vader',
      gender: 'male',
      birth_year: '41.9BBY',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      homeworld: 20,
      id: 2,
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      films: [1, 2, 3, 4, 5, 6],
      species: [1],
      starships: [48, 59, 64, 65, 74],
      url: 'https://sw-api.starnavi.io/people/2/',
      vehicles: [38],
    },
  ];

  const renderCharacterList = () =>
    render(<CharacterList list={MOCK_LIST} onClick={MOCK_FUNCTION} />);

  it('renders the character list correctly', () => {
    const { asFragment } = renderCharacterList();

    const characterList = screen.getByTestId(CHARACTER_LIST_TEST_ID);
    expect(characterList).toBeInTheDocument();
    expect(characterList.children).toHaveLength(MOCK_LIST.length);

    MOCK_LIST.forEach(character => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('handles character card clicks correctly', () => {
    renderCharacterList();

    const characterCards = screen.getAllByRole('listitem');
    characterCards.forEach((card, index) => {
      fireEvent.click(card);
      expect(MOCK_FUNCTION).toHaveBeenCalledWith(MOCK_LIST[index].id);
    });

    expect(MOCK_FUNCTION).toHaveBeenCalledTimes(MOCK_LIST.length);
  });
});
