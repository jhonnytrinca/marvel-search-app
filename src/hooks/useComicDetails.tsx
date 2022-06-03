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

  const handleCreators = (type: string) => {
    const writers = comic.creators?.items?.filter(
      (comic: any) => comic.role === 'writer'
    );
    const pencillers = comic.creators?.items.filter(
      (comic: any) => comic.role === 'penciller'
    );
    const covers = comic.creators?.items.filter(
      (comic: any) => comic.role === 'penciller (cover)'
    );

    console.log(covers);

    if (type === 'writers') {
      return (
        <span>
          {writers.length > 0 &&
            `${writers[0].name}${
              writers.length > 1 ? ` + ${writers.length - 1}` : ''
            };`}
        </span>
      );
    } else if (type === 'pencillers') {
      return (
        <span>
          {pencillers.length > 0 &&
            `${pencillers[0].name}${
              pencillers.length > 1 ? ` + ${pencillers.length - 1}` : ''
            };`}
        </span>
      );
    } else if (type === 'covers') {
      return (
        <span>
          {covers.length > 0 &&
            `${covers[0].name}${
              covers.length > 1 ? `+ ${covers.length - 1}` : ''
            };`}
        </span>
      );
    }
  };

  return { handleDate, handlePrice, handleDetails, handleCreators };
};

export default useComicDetails;