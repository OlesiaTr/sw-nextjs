import { logger } from '@/helpers';
import { toast } from 'react-toastify';
import { api } from './api';

export const getStarshipsByIds = async (ids: number[]) => {
  const encodedIds = ids.join('%2C');

  try {
    const { data } = await api.get(`/starships/?id__in=${encodedIds}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong during fetching starship data.', {
      autoClose: 4000,
    });
    logger(error);
  }
};
