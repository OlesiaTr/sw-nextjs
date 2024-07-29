import { NODE_X } from '@/constants';
import { Film } from '../types';

export const calculateXPosition = (
  index: number,
  nodeX: number,
  positionFactor: number,
  offset: number,
) => index * nodeX * positionFactor + offset;

export const getFilmNodes = (films: Film[]) => {
  return films.map((film, index) => {
    const { id, title } = film;
    return {
      id: `film-node-${id}`,
      position: { x: calculateXPosition(index, NODE_X, 1, 0), y: 200 },
      data: { label: title },
    };
  });
};
