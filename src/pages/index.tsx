import { Card, DetailsModal, Footer, Header, Input } from '../components';
import { AiOutlineSearch } from 'react-icons/ai';
import useMarvelComics from '../hooks/useMarvelComics';

const Home = () => {
  const {
    isValidating,
    handleChange,
    handleClean,
    value,
    comics,
    openModal,
    setOpenModal,
    comicDetails,
    handleDetails
  } = useMarvelComics();

  return (
    <>
      <Header />
      <>
        <div className='flex justify-center items-center w-full py-8 relative'>
          <div className='w-3/5'>
            <Input
              placeholder='Busque pelo nome do quadrinho desejado'
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              value={value}
              icon={AiOutlineSearch}
              clearValue={() => handleClean()}
            />
          </div>
        </div>
        <div className='flex p-8 justify-center'>
          {isValidating ? (
            'Loading Component'
          ) : (
            <>
              {comics?.length > 0 ? (
                <div className='grid grid-cols-4 gap-x-6 gap-y-12 w-full justify-items-center container'>
                  {comics?.map((comic: any) => (
                    <Card
                      comic={comic}
                      key={comic.id}
                      handleDetails={() => handleDetails(comic)}
                    />
                  ))}
                </div>
              ) : (
                'Nenhum informado'
              )}
            </>
          )}

          {openModal && (
            <DetailsModal
              comic={comicDetails}
              closeModal={() => setOpenModal(false)}
            />
          )}
        </div>
      </>
      <Footer />
    </>
  );
};

export default Home;
