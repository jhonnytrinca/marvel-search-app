import useComicDetails from '../../hooks/useComicDetails';

export const EmailTemplate = ({ values }: any) => {
  const {
    handleDate,
    handlePrice,
    handleDetails,
    handleCreators,
    handleCharacters
  } = useComicDetails();

  return (
    <>
      {values.selectedOptions.map((comic: any) => (
        <div key={comic.id}>
          <div>
            <img
              src={`${comic.thumbnail?.path}/standard_fantastic.${comic?.thumbnail?.extension}`}
              alt={comic.title}
            />
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                {comic.title}
              </h1>

              <div>
                <span style={{ fontWeight: '600' }}>Descrição:</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: comic?.description || 'Descrição não informada'
                  }}
                  style={{ fontStyle: 'italic' }}
                />
              </div>
              <div>
                <span style={{ fontWeight: '600' }}>
                  Série a que faz parte:{' '}
                </span>
                <span>{comic?.series?.name || 'Não disponível'}</span>
              </div>
              <div>
                <div>
                  <span style={{ fontWeight: '600' }}>Número de páginas: </span>
                  <span>{comic?.pageCount || 'Não disponível'}</span>
                </div>
                <div>
                  <span style={{ fontWeight: '600' }}>
                    Data de lançamento:{' '}
                  </span>
                  <span>{handleDate(comic)}</span>
                </div>
                <div>
                  <span style={{ fontWeight: '600' }}>
                    Preço de lançamento:{' '}
                  </span>
                  <span>{handlePrice(comic)}</span>
                </div>
                {comic.creators?.items &&
                  comic.creators?.items.length > 0 && (
                    <>
                      <div>
                        <span style={{ fontWeight: '600' }}>Escritores: </span>
                        <span>{handleCreators('writers', comic)}</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: '600' }}>Desenhistas: </span>
                        <span>{handleCreators('pencillers', comic)}</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: '600' }}>
                          Arte da capa:{' '}
                        </span>
                        <span>{handleCreators('covers', comic)}</span>
                      </div>
                    </>
                  )}{' '}
                <div>
                  <span style={{ fontWeight: '600' }}>
                    Personagens participantes:{' '}
                  </span>
                  <span>{handleCharacters(comic)}</span>
                </div>
              </div>
              <p>
                <span>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={handleDetails(comic)}
                    style={{ textDecoration: 'underline' }}
                  >
                    Clique aqui
                  </a>{' '}
                  para mais detalhes desse quadrinho
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
