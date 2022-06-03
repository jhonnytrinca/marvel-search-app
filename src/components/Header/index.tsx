import MarvelLogo from '../../assets/marvel-logo.svg';
import MarvelLogoDark from '../../assets/marvel-logo-pb.png';

export const Header = () => (
  <div className='flex justify-center bg-red-600 w-full h-28'>
    <div className='flex container justify-between items-center h-full'>
      <img src={MarvelLogo} alt='Logo da Marvel' className='dark:hidden w-48' />
      <img
        src={MarvelLogoDark}
        alt='Logo da Marvel'
        className='hidden dark:block w-48'
      />
      <div>Modo escuro</div>
    </div>
  </div>
);

export default Header;
