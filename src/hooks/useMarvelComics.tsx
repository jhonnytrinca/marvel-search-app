import { useEffect } from 'react';
import { useState } from 'react';
import useSWR from 'swr';
import { comicProps } from '../interface';
import ComicsService from '../services/ComicsService';
import useDebounce from './useDebounce';

const useMarvelComics = () => {
  const [value, setValue] = useState<string>('');
  const [searchTitle, setSearchTitle] = useState<string>();
  const [filters, setFilters] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [comicDetails, setComicDetails] = useState<comicProps>({
    title: '',
    id: 0,
    thumbnail: { path: '', extension: '' }
  });

  useEffect(() => {
    !!searchTitle
      ? setFilters({ titleStartsWith: searchTitle })
      : setFilters({});
  }, [searchTitle]);

  const getKeys = () => {
    return [`/comics`, { ...filters, offset: page * 20 }];
  };

  const handleChange = (value: string) => {
    setValue(value);
    setPage(0);
    debounced(value);
  };

  const handleClean = () => {
    setValue('');
    setSearchTitle('');
  };

  const handleDetails = (comic: comicProps) => {
    setComicDetails(comic);
    setOpenModal(true);
  };

  const debounced = useDebounce((value: string) => setSearchTitle(value), 1000);

  const { data, isValidating } = useSWR(getKeys, ComicsService.getAll, {
    revalidateOnFocus: false,
    revalidateIfStale: false
  });
  const comics = data?.data.data.results;
  const totalComics = data?.data.total;

  return {
    isValidating,
    comics,
    totalComics,
    value,
    searchTitle,
    setSearchTitle,
    handleChange,
    handleClean,
    openModal,
    setOpenModal,
    comicDetails,
    handleDetails,
    page,
    setPage
  };
};

export default useMarvelComics;
