import MarvelLogo from '../../assets/marvel-logo.svg';
import MarvelLogoDark from '../../assets/marvel-logo-pb.png';
import { Toggle } from '../Toggle';
import useDarkMode from '../../hooks/useDarkMode';

export const Header = () => {
  const { setTheme } = useDarkMode();

  return (
    <div className='flex justify-center mainColor w-full h-16 md:h-28 dark:darkMainColor'>
      <div className='flex container w-10/12 justify-between items-center h-full'>
        <img
          src={MarvelLogo}
          alt='Logo da Marvel'
          className='dark:hidden w-28 md:w-48'
        />
        <img
          src={MarvelLogoDark}
          alt='Logo da Marvel - Dark Mode'
          className='hidden dark:block w-28 md:w-48'
        />
        <Toggle
          onChange={(e) => {
            e.target.checked ? setTheme('dark') : setTheme('light');
          }}
        />
      </div>
    </div>
  );
};

export default Header;
