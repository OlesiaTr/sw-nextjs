import { toast } from 'react-toastify';
import { api } from './api';
import { logger } from '@/helpers';

export const getCharacters = async (pageNumber: number) => {
  try {
    const { data } = await api.get(`/people/?page=${pageNumber}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong during fetching characters data.', {
      autoClose: 4000,
    });
    logger(error);
  }
};
