import { INITIAL_PAGE } from '@/constants';
import { type Character, loadCharacters } from '@/helpers';
import { useInfiniteScroll } from '@/hooks';
import { type MouseEvent, useCallback, useEffect, useState } from 'react';

export const useHomePage = () => {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [characterId, setCharacterId] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const loadMoreCharacters = useCallback(() => {
    loadCharacters({ pageUrl: page, setLoading, setCharactersList, setPage });
  }, [page]);

  const handleOnCharacterClick = (id: number) => {
    setCharacterId(id);
    setIsOpenModal(true);
  };

  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    loadCharacters({
      pageUrl: page,
      setLoading,
      setCharactersList,
      setPage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInfiniteScroll({
    loading,
    currentPage: page,
    loadMore: loadMoreCharacters,
  });

  return {
    loading,
    charactersList,
    handleOnCharacterClick,
    characterId,
    isOpenModal,
    handleCloseModal,
    setIsOpenModal,
  };
};
