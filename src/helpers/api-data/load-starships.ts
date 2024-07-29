import { Dispatch, SetStateAction } from 'react';
import { Starship } from '../types';
import { toast } from 'react-toastify';
import { logger } from '../logger';
import { getStarshipsByIds } from '@/data';

interface LoadStarshipsParams {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setStarships: Dispatch<SetStateAction<Starship[] | undefined>>;
  starshipsIds: number[];
}

export const loadStarships = async ({
  setLoading,
  setStarships,
  starshipsIds,
}: LoadStarshipsParams) => {
  setLoading(true);
  try {
    const { results } = await getStarshipsByIds(starshipsIds);

    setStarships(results);
  } catch (error) {
    toast.error('Something went wrong during fetching character data.', {
      autoClose: 4000,
    });
    logger(error);
  } finally {
    setLoading(false);
  }
};
