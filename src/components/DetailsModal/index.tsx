import useSWR from 'swr';
import useComicDetails from '../../hooks/useComicDetails';
import useOnKeyDown from '../../hooks/useOnKeyDown';
import ComicsService from '../../services/ComicsService';
import { Button } from '../Button';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiMessageAltDetail } from 'react-icons/bi';

export const DetailsModal = ({ comic, closeModal }: any) => {
  const { handleDate, handlePrice, handleDetails, handleCreators } =
    useComicDetails(comic);
  const { data, isValidating } = useSWR(
    comic?.characters?.collectionURI,
    ComicsService.getCharacters,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );
  const characters = data?.data?.data.results;
  useOnKeyDown('Escape', closeModal);

  console.log(comic);

  return (
    <div className='fixed top-0 left-0 w-full h-screen z-10 flex justify-center items-center bg-black/40'>
      <div className='w-9/12 h-10/12 rounded-xl bg-white dark:bg-gray-600 relative px-8 py-5'>
        <div className='absolute -top-4 -left-20 rounded-lg shadow-xl w-[16rem] h-[23rem]'>
          <img
            src={`${comic.thumbnail?.path}/detail.${comic?.thumbnail?.extension}`}
            alt={comic.title}
            className='rounded-lg object-cover w-full h-full'
          />
        </div>
        <div className='w-full flex flex-col'>
          <div className='flex flex-col w-10/12 self-end '>
            <div className='h-[14rem] min-h-fit'>
              <h1 className='font-semibold text-3xl text-center uppercase dark:text-white'>
                {comic?.title}
              </h1>
              <div className='max-h-[11rem] overflow-auto py-3 text-sm dark:text-white'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: comic?.description || 'Descrição não informada'
                  }}
                  className='beforeBar italic'
                />
              </div>
              <p className='flex items-center text-red-600 font-semibold py-2 text-sm dark:text-gray-900'>
                <BiMessageAltDetail size={20} />
                <span>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={handleDetails()}
                    className='underline pl-2'
                  >
                    Clique aqui
                  </a>{' '}
                  para mais detalhes desse quadrinho
                </span>
              </p>
            </div>
            <div className=' mt-5 leading-8 max-h-[26rem] overflow-auto dark:text-white'>
              <div>
                <span className='topics'>Série a que faz parte: </span>
                <span>{comic?.series?.name || 'Não disponível'}</span>
              </div>
              <div className='grid grid-cols-3'>
                <div>
                  <span className='topics'>Número de páginas: </span>
                  <span>{comic?.pageCount || 'Não disponível'}</span>
                </div>
                <div>
                  <span className='topics'>Data de lançamento: </span>
                  <span>{handleDate()}</span>
                </div>
                <div>
                  <span className='topics'>Preço de lançamento: </span>
                  <span>{handlePrice()}</span>
                </div>
                {comic?.creators?.items.length > 0 && (
                  <>
                    <div>
                      <span className='topics'>Escritores: </span>
                      <span>{handleCreators('writers')}</span>
                    </div>
                    <div>
                      <span className='topics'>Desenhistas: </span>
                      <span>{handleCreators('pencillers')}</span>
                    </div>
                    <div>
                      <span className='topics'>Arte da capa: </span>
                      <span>{handleCreators('covers')}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='min-h-[9rem] pt-4 dark:text-white'>
            {isValidating ? (
              'Loading component'
            ) : (
              <>
                {characters?.length > 0 && (
                  <div className='mt-2'>
                    <span className='topics text-xl'>
                      Personagens participantes:
                    </span>
                    <div className='flex gap-4 overflow-x-auto mt-2'>
                      {characters.map((character: any) => (
                        <div className='flex flex-col flex-wrap gap-2 items-center mx-2 w-full mb-2'>
                          <div className='w-20 rounded-full'>
                            <img
                              src={`${character.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
                              alt={character.name}
                              className='rounded-full'
                            />
                          </div>
                          <span className='uppercase font-bold text-center text-sm	'>
                            {character.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <Button
          onClick={closeModal}
          className='absolute -top-7 -right-7 w-16 h-16 rounded-full mainColor flex items-center justify-center dark:darkMainColor '
        >
          <RiCloseCircleLine size={60} className='text-white' />
        </Button>
      </div>
    </div>
  );
};
