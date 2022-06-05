/** Componente Checkbox
 *
 * @param {boolean} checked - indicativo se checkbox está marcado
 * @param {string[]} label - array que indica label, item 0 indica label com checkbox vazio, item 1 checkbox marcado
 * @param {Function} onChange - função de ação de mudança no checkbox
 * @param {string} name - nome do campo
 *
 */

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
    <label className='flex items-center gap-1 relative py-1 px-2 w-fit cursor-pointer font-poppins'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        name={name}
        className='md:hidden checked:block checked:animate-shake h-6 w-6 md:h-4 md:w-4 rounded-md text-red-500 border-blue-500 bg-transparent focus:ring-offset-0 focus:ring-transparent border-2 peer z-[2]'
        {...rest}
      />
      <span className={`hidden md:block relative z-[2] text-white text-sm`}>
        {handleLabel()}
      </span>
      <div className='hidden md:block absolute inset-0 bg-blue-500 peer-checked:bg-red-500 rounded-full dark:bg-blue-800' />
    </label>
  );
};
