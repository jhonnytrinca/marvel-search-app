type checkboxProps = {
  checked: boolean;
  label: string[];
  onChange: () => void;
  name: string;
};

export const Checkbox = ({
  checked,
  label,
  onChange,
  name,
  ...rest
}: checkboxProps) => {
  const handleLabel = () => {
    if (!checked) {
      return label[0];
    }
    return label[1];
  };

  return (
    <label className='flex items-center gap-1 relative py-1 px-3 w-fit cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        name={name}
        className='hidden checked:block checked:animate-shake h-4 w-4 border-none text-red-500 peer z-[2]'
        {...rest}
      />
      <span className={`relative z-[2] text-white text-sm`}>
        {handleLabel()}
      </span>
      <div className='absolute inset-0 bg-blue-500 peer-checked:bg-red-500 rounded-full' />
    </label>
  );
};
