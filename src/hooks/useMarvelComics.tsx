import { useEffect } from 'react';
import { useState } from 'react';
import useSWR from 'swr';
import ComicsService from '../services/ComicsService';
import useDebounce from './useDebounce';

const useMarvelComics = () => {
  const [value, setValue] = useState<string>('');
  const [searchTitle, setSearchTitle] = useState<string>();
  const [filters, setFilters] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [comicDetails, setComicDetails] = useState({});

  useEffect(() => {
    !!searchTitle
      ? setFilters({ titleStartsWith: searchTitle })
      : setFilters({});
  }, [searchTitle]);

  const getKeys = () => {
    return [`/comics`, filters];
  };

  const handleChange = (value: string) => {
    setValue(value);
    debounced(value);
  };

  const handleClean = () => {
    setValue('');
    setSearchTitle('');
  };

  const handleDetails = (comic: any) => {
    setComicDetails(comic);
    setOpenModal(true);
  };

  const debounced = useDebounce((value: string) => setSearchTitle(value), 1000);

  const { data, isValidating } = useSWR(getKeys, ComicsService.getAll, {
    revalidateOnFocus: false,
    revalidateIfStale: false
  });
  const comics = data?.data.data.results;

  return {
    isValidating,
    comics,
    value,
    searchTitle,
    setSearchTitle,
    handleChange,
    handleClean,
    openModal,
    setOpenModal,
    comicDetails,
    handleDetails
  };
};

export default useMarvelComics;
