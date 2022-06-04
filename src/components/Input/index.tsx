import { ChangeEvent } from 'react';
import { Button } from '../Button';

/** Componente Checkbox
 *
 * @param {string} type - tipo do imput. Padrão 'text'
 * @param {string} placeholder - texto de placeholder do input
 * @param {Function} onChange - função de ação de mudança no input
 * @param {File} image - icone a ser exibido dentro do input
 * @param {string} value - indicativo de valor do input
 * @param {Function} clearValue - função de ação para zerar o input
 * @param {string} className - classes adicionais de estilização
 * @param {boolean} error - boolean de indicativo de erro
 * @param {string} helperText - string informativa exibida quando error for true
 * @param {string} name - nome do campo
 *
 */

type InputProps = {
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: any;
  value: string;
  clearValue?: () => void;
  className?: string;
  error?: boolean;
  helperText?: string;
  name?: string;
};

export const Input = ({
  type,
  placeholder,
  onChange,
  icon: Icon,
  value,
  className,
  clearValue,
  error,
  name,
  helperText
}: InputProps) => {
  return (
    <div className='flex flex-col w-full'>
      <div
        className={`flex items-center w-full border-2 border-gray-300 dark:border-none bg-white rounded-md py-1 px-4 shadow-md ${className}`}
      >
        {Icon && <Icon size={26} className='text-gray-400' />}
        <input
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className='w-full pl-2'
        />
        {!!clearValue && (
          <Button
            onClick={clearValue}
            className='underline italic text-gray-400 px-3'
          >
            limpar
          </Button>
        )}
      </div>
      {error && <span className='text-white p-2 text-md'>{helperText}</span>}
    </div>
  );
};
