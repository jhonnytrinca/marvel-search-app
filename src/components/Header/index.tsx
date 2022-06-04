import MarvelLogo from '../../assets/marvel-logo.svg';
import MarvelLogoDark from '../../assets/marvel-logo-pb.png';
import { Toggle } from '../Toggle';
import useDarkMode from '../../hooks/useDarkMode';

export const Header = () => {
  const { setTheme } = useDarkMode();

  return (
    <div className='flex justify-center bg-red-600  w-full h-28 dark:bg-gray-900'>
      <div className='flex container w-10/12 justify-between items-center h-full'>
        <img
          src={MarvelLogo}
          alt='Logo da Marvel'
          className='dark:hidden w-48'
        />
        <img
          src={MarvelLogoDark}
          alt='Logo da Marvel'
          className='hidden dark:block w-48'
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
