import useSWR from 'swr';
import useComicDetails from '../../hooks/useComicDetails';
import useOnKeyDown from '../../hooks/useOnKeyDown';
import ComicsService from '../../services/ComicsService';
import { Button } from '../Button';

export const DetailsModal = ({ comic, closeModal }: any) => {
  const { handleDate, handlePrice, handleDetails } = useComicDetails(comic);
  const { data } = useSWR(
    comic?.characters?.collectionURI,
    ComicsService.getCharacters
  );
  const characters = data?.data?.data.results;
  useOnKeyDown('Escape', closeModal);

  return (
    <div className='absolute z-10 flex justify-center items-center'>
      <div className='w-[40rem] h-[40rem] border-2 bg-white'>
        <>
          {console.log(comic)}
          <Button onClick={closeModal}>Fechar</Button>
          <div>
            <img
              src={`${comic.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
              alt={comic.title}
              className='w-16 h-16'
            />
            <span className='font-semibold'>{comic?.title}</span>
            <span>{comic?.description || 'Descrição não disponível'}</span>
            <span>detalhes: {handleDetails()}</span>
            <div>
              <span className='font-semibold'>Número de páginas: </span>
              <span>{comic?.pageCount || 'Não disponível'}</span>
            </div>
            {comic?.creators?.items.length > 0 && (
              <div>
                <span className='font-semibold'>Criadores: </span>
                {comic?.creators?.items.map((creator: any) => (
                  <span className='capitalize'>
                    {creator.name} - {creator.role};{' '}
                  </span>
                ))}
              </div>
            )}
            <div>
              <span className='font-semibold'>Data de lançamento: </span>
              <span>{handleDate()}</span>
            </div>
            <div>
              <span className='font-semibold'>Preço de lançamento: </span>
              <span>{handlePrice()}</span>
            </div>
            <div>
              <span className='font-semibold'>Série a que faz parte: </span>
              <span>{comic?.series?.name || 'Não disponível'}</span>
            </div>
          </div>
          {characters?.length > 0 && (
            <div className='flex'>
              {characters.map((character: any) => (
                <div className='flex flex-col flex-wrap gap-2 items-center '>
                  <img
                    src={`${character.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
                    alt={character.name}
                    className='w-16 h-16'
                  />
                  <span>{character.name}</span>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};
