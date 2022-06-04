import { Button } from '../Button';

type InputProps = {
  type?: string;
  placeholder: string;
  onChange: (e: any) => void;
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
