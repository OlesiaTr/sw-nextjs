import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';
import { useHomePage } from '../hooks';
import type { Character } from '@/helpers';
import { MODAL_OVERLAY_TEST_ID } from '@/sections/graph-modal';

jest.mock('../hooks/use-home-page.ts');

describe('HomePage', () => {
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

  beforeEach(() => {
    (useHomePage as jest.Mock).mockReturnValue({
      loading: false,
      charactersList: [],
      handleOnCharacterClick: jest.fn(),
      characterId: 1,
      isOpenModal: false,
      handleCloseModal: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the heading', () => {
    const { asFragment } = render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /starwars characters list/i,
    });

    expect(heading).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the loader when loading is true', () => {
    (useHomePage as jest.Mock).mockReturnValueOnce({
      ...useHomePage(),
      loading: true,
    });

    const { asFragment } = render(<HomePage />);

    const loader = screen.getByTestId('rings-loading');
    expect(loader).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the CharacterList component with correct props', () => {
    (useHomePage as jest.Mock).mockReturnValueOnce({
      ...useHomePage(),
      charactersList: MOCK_LIST,
    });

    const { asFragment } = render(<HomePage />);

    const characterItems = screen.getAllByRole('listitem');
    expect(characterItems).toHaveLength(MOCK_LIST.length);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the GraphModal when isOpenModal is true', () => {
    (useHomePage as jest.Mock).mockReturnValueOnce({
      ...useHomePage(),
      isOpenModal: true,
    });

    const { asFragment } = render(<HomePage />);

    const modal = screen.getByTestId(MODAL_OVERLAY_TEST_ID);
    expect(modal).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
