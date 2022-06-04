import america from '../../assets/hero-icons/america.png';
import antman from '../../assets/hero-icons/antman.png';
import avengers from '../../assets/hero-icons/avengers.png';
import blackpanther from '../../assets/hero-icons/blackpanther.png';
import capmarvel from '../../assets/hero-icons/capmarvel.png';
import guardians from '../../assets/hero-icons/guardians.png';
import hulk from '../../assets/hero-icons/hulk.png';
import ironman from '../../assets/hero-icons/ironman.png';
import spiderman from '../../assets/hero-icons/spiderman.png';
import thor from '../../assets/hero-icons/thor.png';
import xmen from '../../assets/hero-icons/xmen.png';

export const Loading = () => {
  const icons = [
    america,
    antman,
    avengers,
    blackpanther,
    capmarvel,
    guardians,
    hulk,
    ironman,
    spiderman,
    thor,
    xmen
  ];

  const random = Math.floor(Math.random() * icons.length);

  return (
    <div className='flex flex-col items-center'>
      <img
        src={icons[random]}
        alt='Carregando'
        className='w-40 animate-spin opacity-90'
      />
      <p className='text-2xl font-semibold pt-'>Carregando...</p>
    </div>
  );
};
