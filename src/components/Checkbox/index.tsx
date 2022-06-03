type checkboxProps = {
  checked: boolean;
  label: string;
  onChange: () => void;
  name: string;
};

export const Checkbox = ({
  checked,
  label,
  onChange,
  name,
  ...rest
}: checkboxProps) => (
  <label className='flex items-center gap-2 relative py-1 px-3 w-fit cursor-pointer'>
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      name={name}
      className='hidden checked:block h-4 w-4 border-none text-red-500 peer z-[2]'
      {...rest}
    />
    <span className={`relative z-[2] text-white`}>{label}</span>
    <div className='absolute inset-0 bg-blue-500 peer-checked:bg-red-500 rounded-full' />
  </label>
);
