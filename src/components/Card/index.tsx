import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export const Card = ({ comic }: any) => {
  return (
    <>
      <div className='border-2 rounded-xl w-64 h-fit flex flex-col gap-3 relative hover:opacity-[0.9] hover:transition-opacity'>
        <img
          src={`${comic?.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
          alt='Capa do quadrinho'
          className='rounded-t-xl'
        />

        <span className='text-xl font-semibold text-center truncate px-2'>
          {comic?.title || ''}
        </span>

        <div className='flex justify-between items-center px-4 mb-5'>
          <Checkbox
            checked={false}
            label='Selecionar'
            onChange={() => {}}
            name='checkbox'
          />
          <Button
            onClick={() => {}}
            className='flex gap-1 items-center underline text-gray-600'
          >
            <AiOutlineSearch />
            Detalhes
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
