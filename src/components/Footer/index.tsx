import { Button } from '../Button';
import { Input } from '../Input';
import { MdEmail, MdPerson } from 'react-icons/md';

export const Footer = ({ formik, handleSubmit }: any) => {
  return (
    <div className='relative flex justify-center bg-red-600 w-full h-48'>
      <div className='absolute container -top-20 w-3/5'>
        <h1 className='text-center pb-6 text-2xl font-semibold'>
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
            className='!border-red-600 border-[3px]'
          />
          <Button
            type='submit'
            className='px-12 h-[3.25rem] rounded-md text-lg text-white text-center bg-blue-500'
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
