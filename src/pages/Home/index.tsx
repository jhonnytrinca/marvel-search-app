import { Card, DetailsModal, Footer, Header, Input } from '../../components';
import { AiOutlineSearch } from 'react-icons/ai';
import useMarvelComics from '../../hooks/useMarvelComics';
import { FieldArray, Form, Formik } from 'formik';
import { schemaDefault } from './validation';

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
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        if (values.selectedOptions.length === 0) {
          window.alert('É necessário selecionar ao menos um quadrinho!');
        }
        console.log(values);
      }}
      validationSchema={schemaDefault}
    >
      {({ handleSubmit, ...props }) => (
        <>
          <Form>
            <Header />
            <div className='bg-gray-100 pb-28'>
              <div className='flex justify-center items-center w-full py-8 relative'>
                <div className='w-3/6'>
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

              <div className='flex p-8 justify-center overflow-auto'>
                {isValidating ? (
                  'Loading Component'
                ) : (
                  <FieldArray
                    name='selectedOptions'
                    render={(arrayHelpers) => (
                      <>
                        {comics?.length > 0 ? (
                          <div className='grid grid-cols-5 gap-10 justify-items-center w-11/12'>
                            {comics?.map((comic: any) => (
                              <Card
                                comic={comic}
                                key={comic.id}
                                formik={props}
                                handleDetails={() => handleDetails(comic)}
                                onChange={(e: any) => {
                                  if (e.target.checked)
                                    arrayHelpers.push(comic.id);
                                  else {
                                    const index =
                                      props.values.selectedOptions.indexOf(
                                        comic.id
                                      );
                                    arrayHelpers.remove(index);
                                  }
                                }}
                              />
                            ))}
                          </div>
                        ) : (
                          'Nenhum informado'
                        )}
                      </>
                    )}
                  ></FieldArray>
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
