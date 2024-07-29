import { useEffect } from 'react';

interface UseInfiniteScrollProps {
  loading: boolean;
  currentPage: number;
  loadMore: () => void;
}

export const useInfiniteScroll = ({
  loading,
  currentPage,
  loadMore,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading
      ) {
        if (currentPage) {
          loadMore();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, loading, loadMore]);
};
