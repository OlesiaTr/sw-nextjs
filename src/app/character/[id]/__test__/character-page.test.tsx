import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import type { Character } from '@/helpers';
import { useCharacterPage } from '../hooks';
import { useParams } from 'next/navigation';
import CharacterPage from '../page';

jest.mock('../hooks/use-character-page.ts');

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

describe('CharacterPage Component', () => {
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

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: MOCK_CHARACTER.id });
    (useCharacterPage as jest.Mock).mockReturnValue({
      loading: false,
      character: MOCK_CHARACTER,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing if id is not available', () => {
    (useParams as jest.Mock).mockReturnValueOnce({});

    const { asFragment, container } = render(<CharacterPage />);

    expect(container).toBeEmptyDOMElement();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the loader when loading is true', () => {
    (useCharacterPage as jest.Mock).mockReturnValueOnce({
      loading: true,
      character: null,
    });

    const { asFragment } = render(<CharacterPage />);

    const loader = screen.getByTestId('rings-loading');
    expect(loader).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the "Back to Home" link', () => {
    const { asFragment } = render(<CharacterPage />);

    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the character name when character is available', () => {
    const { asFragment } = render(<CharacterPage />);

    const characterName = screen.getByText(MOCK_CHARACTER.name);
    expect(characterName).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the Graph component with correct characterId prop', () => {
    render(<CharacterPage />);

    const graph = screen.getByTestId('rf__wrapper');
    expect(graph).toBeInTheDocument();
  });
});
