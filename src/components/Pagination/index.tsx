import { Button } from '../Button';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos
} from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';

/**
 * Componente Pagination
 *
 * @param {number} count - valor total de itens
 * @param {number} page - indicação do número de página selecionado
 * @param {number} perPage - Total de itens a serem exibidos por página
 * @param {Dispatch} setPage - alteração para o novo estado de página
 *
 */

type paginationProps = {
  count: number;
  page: number;
  perPage: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  count,
  page,
  perPage,
  setPage
}: paginationProps) => {
  const total = Math.ceil(count / perPage);
  const disabledPrevious = page == 0;
  const disabledNext = page >= total;

  return (
    <div className='flex w-full md:w-1/2 self-center justify-between'>
      <Button
        className={`flex items-center mainColor dark:darkMainColor rounded-lg px-6 py-3 text-white font-semibold ${
          disabledPrevious && 'opacity-40'
        }`}
        onClick={() => setPage(page - 1)}
        disabled={disabledPrevious}
        dataCy='buttonPrevPage'
      >
        <MdOutlineArrowBackIos />
        <p>Anterior</p>
      </Button>

      <Button
        className={`flex items-center mainColor dark:darkMainColor rounded-lg px-6 py-3 text-white font-semibold ${
          disabledNext && 'opacity-40'
        }`}
        onClick={() => setPage(page + 1)}
        disabled={disabledNext}
        dataCy='buttonNextPage'
      >
        <p>Seguinte</p>
        <MdOutlineArrowForwardIos />
      </Button>
    </div>
  );
};
