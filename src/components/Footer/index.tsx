import { Button } from '../Button';
import { Input } from '../Input';
import { MdEmail, MdPerson } from 'react-icons/md';

/** Componente Footer
 *
 * @param {Object} formik - propriedades e funções do Formik
 *
 */

export const Footer = ({ formik }: any) => {
  return (
    <div className='relative flex justify-center mainColor w-full h-44 dark:darkMainColor'>
      <div className='absolute container -top-20 w-3/5'>
        <h1 className='text-center pb-6 text-2xl font-semibold dark:text-white'>
          Envie por email os quadrinhos selecionados:
        </h1>
        <div className='flex gap-4 '>
          <Input
            placeholder='Informe seu nome'
            name='name'
            icon={MdPerson}
            onChange={(e) => {
              formik.setFieldValue('name', e.target.value);
            }}
            value={formik.values.name}
            className='!border-red-600 border-[3px]'
            error={!!(formik.errors.name && formik.touched.name)}
            helperText={formik.errors.name}
          />
          <Input
            type='email'
            name='email'
            icon={MdEmail}
            placeholder='Informe seu email'
            onChange={(e) => {
              formik.setFieldValue('email', e.target.value);
            }}
            value={formik.values.email}
            error={!!(formik.errors.email && formik.touched.email)}
            helperText={formik.errors.email}
            className='!border-red-600 border-[3px'
          />
          <Button
            type='submit'
            className='px-12 h-[3.25rem] rounded-md text-lg text-white text-center bg-blue-500 dark:bg-blue-800'
          >
            Enviar
          </Button>
        </div>
        <div className='text-center p-10'>
          <a
            href='http://marvel.com'
            target='_blank'
            rel='noreferrer'
            className='text-white'
          >
            Data provided by Marvel. © 2022 MARVEL
          </a>
        </div>
      </div>
    </div>
  );
};
