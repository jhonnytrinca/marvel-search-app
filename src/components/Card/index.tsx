import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

/** Componente Card
 *
 * @param {Object} comic - quadrinho a ser exibido
 * @param {Function} handleDetails - função de abertura do modal de detalhes
 * @param {Function} onChange - função de ação de mudança no checkbox
 * @param {Object} formik - propriedades e funções do Formik
 *
 */

type cardProps = {
  comic: {
    thumbnail: {
      path: string;
      extension: string;
    };
    title: string;
    id: number;
  };
  handleDetails: () => void;
  onChange: (e?: MouseEvent) => void;
  formik: any;
};

export const Card = ({ comic, handleDetails, onChange, formik }: cardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className='rounded-xl w-40 md:w-60 h-fit flex flex-col gap-3 relative hover:transition-opacity shadow-xl hover:scale-105	bg-white dark:bg-gray-600'
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img
          src={`${comic?.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
          alt='Capa do quadrinho'
          className='rounded-t-xl hover:opacity-[0.9]'
        />
        <div className='overflow-hidden whitespace-nowrap text-center '>
          <span
            className={`text-sm md:text-xl font-semibold min-w-full px-2 uppercase dark:text-white font-kdam ${
              hover && 'animateTitle'
            }`}
          >
            {comic?.title || ''}
          </span>
        </div>

        <div className='flex justify-between items-center pl-2 pr-4 md:px-3 mb-5'>
          <Checkbox
            checked={formik.values.selectedOptions?.some(
              (item: any) => item.id === comic.id
            )}
            label={['Selecionar', 'Selecionado']}
            onChange={onChange}
            name='checkbox'
          />
          <Button
            onClick={handleDetails}
            className='flex gap-1 items-center underline text-gray-600 dark:text-white font-poppins'
            dataCy='comicDetails'
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
