import { toast } from 'react-toastify';
import { api } from './api';
import { logger } from '@/helpers';

export const getFilmsByCharacterId = async (id: number) => {
  try {
    const { data } = await api.get(`/films/?characters__contains=${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong during fetching movie data.', {
      autoClose: 4000,
    });
    logger(error);
  }
};
