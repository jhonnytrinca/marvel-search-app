import { Button } from '../Button';

type InputProps = {
  type?: string;
  placeholder: string;
  onChange: (e: any) => void;
  icon?: any;
  value: string;
  clearValue?: () => void;
  label?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
};

export const Input = ({
  type,
  placeholder,
  onChange,
  icon: Icon,
  value,
  label,
  className,
  clearValue,
  error,
  helperText
}: InputProps) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label className='pb-2 px-2 text-gray-600 font-semibold'>{label}</label>
      )}
      <div
        className={`flex items-center w-full border-2 border-gray-300 bg-white rounded-md p-2 shadow-md ${className}`}
      >
        {Icon && <Icon size={26} className='text-gray-400' />}
        <input
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
      {error && (
        <span className='text-white p-2 text-md text-lg'>{helperText}</span>
      )}
    </div>
  );
};
