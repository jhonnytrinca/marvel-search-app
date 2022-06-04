import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export const Card = ({ comic, handleDetails, onChange, formik }: any) => {
  return (
    <>
      <div className='rounded-xl w-60 h-fit flex flex-col gap-3 relative hover:opacity-[0.9] hover:transition-opacity shadow-xl hover:scale-105	bg-white dark:bg-gray-600'>
        <img
          src={`${comic?.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
          alt='Capa do quadrinho'
          className='rounded-t-xl'
        />

        <span className='text-xl font-semibold text-center truncate px-2 uppercase dark:text-white'>
          {comic?.title || ''}
        </span>

        <div className='flex justify-between items-center px-3 mb-5'>
          <Checkbox
            checked={formik.values.selectedOptions?.some(
              (item: number) => item === comic.id
            )}
            label={['Selecionar', 'Selecionado']}
            onChange={onChange}
            name='checkbox'
          />
          <Button
            onClick={handleDetails}
            className='flex gap-1 items-center underline text-gray-600 dark:text-white'
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
