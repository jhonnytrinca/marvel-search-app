import { Input } from '../components';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {
  return (
    <div className='flex justify-center items-center w-screen py-8 '>
      <div className='w-3/5'>
        <Input
          placeholder='Busque pelo nome do quadrinho desejado'
          onChange={() => {}}
          value=''
          icon={AiOutlineSearch}
          clearValue={() => {}}
        />
      </div>
    </div>
  );
};

export default Home;
