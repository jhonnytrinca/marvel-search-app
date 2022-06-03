import { Button } from '../Button';
import { Input } from '../Input';

export const Footer = () => {
  return (
    <div className='relative flex justify-center bg-red-600 w-full h-48 mt-16'>
      <div className='absolute container flex -top-7 gap-4 w-3/5'>
        <Input
          placeholder='Informe seu nome'
          onChange={() => {}}
          value={''}
          className='border-red-600 border-[3px]'
          error={true}
          helperText='Informe o nome'
        />
        <Input
          type='email'
          placeholder='Informe seu email'
          onChange={() => {}}
          value={''}
          className='border-red-600 border-[3px]'
        />
        <Button
          onClick={() => {}}
          className='py-2 px-10 w-[22rem] rounded-md text-lg text-white text-center bg-blue-500 font-semibold h-16'
        >
          Enviar email
        </Button>
      </div>
    </div>
  );
};
