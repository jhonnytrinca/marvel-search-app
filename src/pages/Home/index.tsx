import {
  Card,
  DetailsModal,
  Footer,
  Header,
  Input,
  Loading,
  Pagination
} from '../../components';
import { AiOutlineSearch } from 'react-icons/ai';
import useMarvelComics from '../../hooks/useMarvelComics';
import { FieldArray, Form, Formik } from 'formik';
import { schemaDefault } from './validation';
import useEmail from '../../hooks/useEmail';
import { comicProps } from '../../interface';

type initialValuesProps = {
  selectedOptions: string[];
  name: string;
  email: string;
};

const initialValues: initialValuesProps = {
  selectedOptions: [],
  name: '',
  email: ''
};

const Home = () => {
  const { handleEmail } = useEmail();
  const {
    isValidating,
    handleChange,
    handleClean,
    value,
    comics,
    openModal,
    setOpenModal,
    comicDetails,
    handleDetails,
    totalComics,
    page,
    setPage
  } = useMarvelComics();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleEmail(values, actions);
      }}
      validationSchema={schemaDefault}
    >
      {({ handleSubmit, ...props }) => (
        <>
          <Form>
            <Header />
            <div className='bg-gray-100 pb-4 md:pb-28 dark:bg-gray-700'>
              <div className='flex justify-center items-center w-full py-6 md:py-8 relative'>
                <div className='w-5/6 md:w-3/6 font-montserrat'>
                  <h1 className='text-center pb-2 md:text-2xl font-semibold font-montserrat dark:text-white'>
                    Qual quadrinho deseja saber mais?
                  </h1>
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

              <div className='flex px-2 py-4 md:p-8 justify-center overflow-auto'>
                {isValidating ? (
                  <Loading />
                ) : (
                  <div className='flex flex-col'>
                    <FieldArray
                      name='selectedOptions'
                      render={(arrayHelpers) => (
                        <>
                          {comics?.length > 0 ? (
                            <>
                              <div className='grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10'>
                                {comics?.map((comic: comicProps) => (
                                  <Card
                                    comic={comic}
                                    key={comic.id}
                                    formik={props}
                                    handleDetails={() => handleDetails(comic)}
                                    onChange={(e: any) => {
                                      if (e.target.checked)
                                        arrayHelpers.push(comic);
                                      else {
                                        const index =
                                          props.values.selectedOptions.indexOf(
                                            comic.id!.toString()
                                          );
                                        arrayHelpers.remove(index);
                                      }
                                    }}
                                  />
                                ))}
                              </div>
                              <div className='flex px-6 pt-4 md:pt-8 justify-center'>
                                <Pagination
                                  count={totalComics}
                                  page={page}
                                  setPage={setPage}
                                  perPage={20}
                                />
                              </div>
                            </>
                          ) : (
                            <div className='h-[8.6rem]'>
                              <p className='text-2xl font-poppins dark:text-white'>
                                Nenhum quadrinho foi encontrado, tente procurar
                                por outro nome!
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    ></FieldArray>
                  </div>
                )}

                {openModal && (
                  <DetailsModal
                    comic={comicDetails}
                    closeModal={() => setOpenModal(false)}
                  />
                )}
              </div>
            </div>
            <Footer formik={props} />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Home;
