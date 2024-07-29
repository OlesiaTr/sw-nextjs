import { Film } from '../types';

export const getFilmEdges = (films: Film[]) => {
  return films.map(film => ({
    id: `film-edge-${film.id}`,
    source: 'character',
    target: `film-node-${film.id}`,
  }));
};
