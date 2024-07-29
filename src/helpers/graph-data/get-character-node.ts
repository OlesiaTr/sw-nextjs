import { NODE_X } from '@/constants';
import { Character } from '../types';

export const getCharacterNode = (character: Character, films: number[]) => ({
  id: `character`,
  position: { x: (films.length * NODE_X) / 2 - NODE_X / 2, y: 50 },
  data: { label: character.name },
});
