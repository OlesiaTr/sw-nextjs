import { Dispatch, SetStateAction } from 'react';
import { Film } from '../types';
import { toast } from 'react-toastify';
import { logger } from '../logger';
import { getFilmsByCharacterId } from '@/data';

interface LoadFilmsParams {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setFilmsList: Dispatch<SetStateAction<Film[] | undefined>>;
  characterId: number;
}

export const loadFilms = async ({
  setLoading,
  setFilmsList,
  characterId,
}: LoadFilmsParams) => {
  setLoading(true);
  try {
    const { results } = await getFilmsByCharacterId(characterId);

    setFilmsList(results);
  } catch (error) {
    toast.error('Something went wrong during fetching character data.', {
      autoClose: 4000,
    });
    logger(error);
  } finally {
    setLoading(false);
  }
};
