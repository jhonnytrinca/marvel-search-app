import moment from 'moment';
import america from '../assets/hero-icons/america.png';
import antman from '../assets/hero-icons/antman.png';
import avengers from '../assets/hero-icons/avengers.png';
import blackpanther from '../assets/hero-icons/blackpanther.png';
import capmarvel from '../assets/hero-icons/capmarvel.png';
import guardians from '../assets/hero-icons/guardians.png';
import hulk from '../assets/hero-icons/hulk.png';
import ironman from '../assets/hero-icons/ironman.png';
import spiderman from '../assets/hero-icons/spiderman.png';
import thor from '../assets/hero-icons/thor.png';
import xmen from '../assets/hero-icons/xmen.png';

type comicProps = {
  title?: string;
  creators?: {
    items: [
      {
        name: string;
        role: string;
      }
    ];
  };
  dates?: [
    {
      type: string;
      date: string;
    }
  ];
  prices?: [
    {
      type: string;
      price: number;
    }
  ];
  urls?: [
    {
      type: string;
      url: string;
    }
  ];
};

const useComicDetails = (comic: comicProps) => {
  const handleDate = () => {
    const date = comic.dates?.find((comic) => comic.type === 'onsaleDate');

    if (date) {
      return `${moment(date.date).format('DD/MM/YYYY')}`;
    }
    return 'Não disponível';
  };

  const handlePrice = () => {
    const price = comic.prices?.find((comic) => (comic.type = 'printPrice'));

    if (price && price.price > 0) {
      return `USD ${price.price}`;
    }
    return 'Não disponível';
  };

  const handleDetails = () => {
    const detail = comic.urls?.find((comic) => comic.type === 'detail');

    if (detail) {
      return detail.url;
    }
  };

  const handleCreators = (type: string) => {
    const writers = comic.creators?.items?.filter(
      (comic) => comic.role === 'writer'
    );
    const pencillers = comic.creators?.items.filter(
      (comic) => comic.role === 'penciller'
    );
    const covers = comic.creators?.items.filter(
      (comic) => comic.role === 'penciller (cover)'
    );

    if (type === 'writers') {
      if (writers && writers.length > 0) {
        return (
          <span>
            {writers[0].name}
            {writers.length > 1 ? ` + ${writers.length - 1}` : ''}
          </span>
        );
      }
      return 'Não disponível.';
    } else if (type === 'pencillers') {
      if (pencillers && pencillers.length > 0) {
        return (
          <span>
            {pencillers[0].name}
            {pencillers.length > 1 ? ` + ${pencillers.length - 1}` : ''}
          </span>
        );
      }
      return 'Não disponível.';
    } else if (type === 'covers') {
      if (covers && covers.length > 0) {
        return (
          <span>
            {covers[0].name}
            {covers.length > 1 ? `+ ${covers.length - 1}` : ''}
          </span>
        );
      }
      return 'Não disponível.';
    }
  };

  const handleIcon = () => {
    const filter = (hero: string) => comic.title?.toLowerCase().includes(hero);

    switch (true) {
      case filter('captain america'):
        return <img src={america} alt='Icone Captão America' />;
      case filter('ant-man'):
        return <img src={antman} alt='Icone Homem Formiga' />;
      case filter('avengers'):
        return <img src={avengers} alt='Icone Vingadores' />;
      case filter('panther'):
        return <img src={blackpanther} alt='Icone Pantera Negra' />;
      case filter('captain marvel'):
        return <img src={capmarvel} alt='Icone Capitã Marvel' />;
      case filter('guardians of the galaxy'):
        return <img src={guardians} alt='Icone Guardiões da Galaxia' />;
      case filter('hulk'):
        return <img src={hulk} alt='Icone Hulk' />;
      case filter('iron man'):
        return <img src={ironman} alt='Icone Homem de Ferro' />;
      case filter('spider'):
        return <img src={spiderman} alt='Icone Homem Aranha' />;
      case filter('thor'):
        return <img src={thor} alt='Icone Thor' />;
      case filter('x-men'):
        return <img src={xmen} alt='Icone X-Men' />;
    }
  };

  return { handleDate, handlePrice, handleDetails, handleCreators, handleIcon };
};

export default useComicDetails;
