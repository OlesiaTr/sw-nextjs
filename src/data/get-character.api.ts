import { toast } from 'react-toastify';
import { api } from './api';
import { logger } from '@/helpers';

export const getCharacter = async (id: number) => {
  try {
    const { data } = await api.get(`/people/${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong during fetching character data.', {
      autoClose: 4000,
    });
    logger(error);
  }
};
