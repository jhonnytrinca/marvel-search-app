import useSWR from 'swr';
import useComicDetails from '../../hooks/useComicDetails';
import useOnKeyDown from '../../hooks/useOnKeyDown';
import ComicsService from '../../services/ComicsService';
import { Button } from '../Button';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiMessageAltDetail } from 'react-icons/bi';

/** Componente Checkbox
 *
 * @param {Object} comic - objeto contendo dados do quadrinho
 * @param {Function} closeModal - função de ação de fechamento do modal
 *
 */

type detailsProps = {
  comic: {
    characters?: {
      collectionURI: string;
    };
    thumbnail?: {
      path: string;
      extension: string;
    };
    title?: string;
    description?: string;
    series?: {
      name: string;
    };
    pageCount?: string;
    creators?: {
      items: [
        {
          name: string;
          role: string;
        }
      ];
    };
    dates?: [
      {
        type: string;
        date: string;
      }
    ];
    prices?: [
      {
        type: string;
        price: number;
      }
    ];
    urls?: [
      {
        type: string;
        url: string;
      }
    ];
  };
  closeModal: () => void;
};

type characterProps = {
  thumbnail: { path: string };
  name: string;
};

export const DetailsModal = ({ comic, closeModal }: detailsProps) => {
  const { handleDate, handlePrice, handleDetails, handleCreators, handleIcon } =
    useComicDetails(comic);
  const { data, isValidating } = useSWR(
    comic?.characters?.collectionURI,
    ComicsService.getCharacters,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );
  const characters = data?.data?.data.results;
  useOnKeyDown('Escape', closeModal);

  return (
    <div className='fixed top-0 left-0 w-full h-screen z-10 flex md:justify-center md:items-center bg-black/40 '>
      <div className='w-screen md:w-10/12 md:h-[90%] md:rounded-xl bg-white dark:bg-gray-600 relative my-6 md:m-0 px-4 py-2 md:px-8 md:py-5 flex flex-col overflow-y-auto md:overflow-y-visible'>
        <div className='md:absolute md:-top-4 md:-left-20 rounded-lg shadow-xl w-[16rem] h-[23rem] self-center my-4 md:m-0'>
          <img
            src={`${comic.thumbnail?.path}/detail.${comic?.thumbnail?.extension}`}
            alt={comic.title}
            className='rounded-lg object-cover w-full h-full'
          />
        </div>
        <div className='w-full flex flex-col '>
          <div className='flex flex-col md:w-10/12 md:self-end md:z-[2]'>
            <div className='md:h-[14rem] flex flex-col gap-3'>
              <h1 className='font-semibold text-lg md:text-3xl text-center uppercase dark:text-white font-kdam '>
                {comic?.title}
              </h1>
              <div className='md:max-h-[11rem] md:overflow-auto md:py-3 text-sm dark:text-white'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: comic?.description || 'Descrição não informada'
                  }}
                  className='beforeBar italic font-montserrat'
                />
              </div>
              <p className='flex md:items-center text-red-600 font-semibold py-1 md:py-2 text-sm dark:text-gray-900'>
                <BiMessageAltDetail size={20} />
                <span>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={handleDetails()}
                    className='underline pl-1 md:pl-2 font-montserrat'
                  >
                    Clique aqui
                  </a>{' '}
                  para mais detalhes desse quadrinho
                </span>
              </p>
            </div>
            <div className='mt-4 md:mt-7 leading-5 md:leading-8 h-full md:max-h-[26rem] md:overflow-auto dark:text-white font-montserrat'>
              <div>
                <span className='topics'>Série a que faz parte: </span>
                <span>{comic?.series?.name || 'Não disponível'}</span>
              </div>
              <div className='grid md:grid-cols-3 gap-2 md:gap-0 py-4 md:py-0'>
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
                {comic.creators?.items && comic.creators?.items.length > 0 && (
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
          <div className='md:min-h-[9rem] md:pt-4 dark:text-white'>
            {isValidating ? (
              ''
            ) : (
              <>
                {characters?.length > 0 && (
                  <div className='mt-2 font-poppins'>
                    <span className='topics md:text-xl'>
                      Personagens participantes:
                    </span>
                    <div className='grid grid-cols-3 md:flex gap-4 overflow-x-auto mt-2'>
                      {characters.map(
                        (character: characterProps, index: number) => (
                          <div
                            className='flex flex-col flex-wrap gap-2 items-center mx-2 w-full mb-2'
                            key={index}
                          >
                            <div className='w-16 md:w-20 rounded-full'>
                              <img
                                src={`${character.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
                                alt={character.name}
                                className='rounded-full'
                              />
                            </div>
                            <span className='uppercase font-bold text-center text-sm	font-montserrat'>
                              {character.name}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <Button
          onClick={closeModal}
          className='absolute top-1 md:-top-7 right-1 md:-right-7 w-10 h-10 md:w-16 md:h-16 rounded-full mainColor flex items-center justify-center dark:darkMainColor '
        >
          <RiCloseCircleLine size={60} className='text-white' />
        </Button>

        <div className='hidden md:block absolute top-4 right-6 w-60 rotate-[25deg] opacity-30'>
          {handleIcon()}
        </div>
      </div>
    </div>
  );
};
