import moment from 'moment';

const useComicDetails = (comic: any) => {
  const handleDate = () => {
    const date = comic.dates.find((comic: any) => comic.type === 'onsaleDate');

    if (date) {
      return `${moment(date.date).format('DD/MM/YYYY')}`;
    }
    return 'Não disponível';
  };

  const handlePrice = () => {
    const price = comic.prices.find(
      (comic: any) => (comic.type = 'printPrice')
    );

    if (price && price.price > 0) {
      return `USD ${price.price}`;
    }
    return 'Não disponível';
  };

  const handleDetails = () => {
    const detail = comic.urls.find((comic: any) => comic.type === 'detail');

    return detail.url;
  };

  return { handleDate, handlePrice, handleDetails };
};

export default useComicDetails;
