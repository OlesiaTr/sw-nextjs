import { CustomError } from './types';

export const logger = (error: CustomError): void => {
  console.error(error);
};
