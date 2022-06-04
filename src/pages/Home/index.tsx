import {
  Card,
  DetailsModal,
  Footer,
  Header,
  Input,
  Loading
} from '../../components';
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
            <div className='bg-gray-100 pb-4 md:pb-28 dark:bg-gray-700'>
              <div className='flex justify-center items-center w-full py-6 md:py-8 relative'>
                <div className='w-5/6 md:w-3/6 font-montserrat'>
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

              <div className='flex p-4 md:p-8 justify-center overflow-auto'>
                {isValidating ? (
                  <Loading />
                ) : (
                  <FieldArray
                    name='selectedOptions'
                    render={(arrayHelpers) => (
                      <>
                        {comics?.length > 0 ? (
                          <div className='grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-10 justify-items-center w-11/12'>
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
