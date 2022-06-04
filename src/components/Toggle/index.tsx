/** Componente Toggle
 *
 * @param {Function} onChange - função de ação de mudança no input
 *
 */

import { ChangeEvent } from 'react';

type toggleProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Toggle = ({ onChange }: toggleProps) => {
  return (
    <div className='relative inline-block w-12 mr-2 align-middle select-none transition duration-300 ease-in'>
      <input
        type='checkbox'
        name='toggle'
        id='toggle'
        onChange={onChange}
        className='bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer peer checked:dark-mode'
      />
      <label className='toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-blue-400 cursor-pointer peer-checked:bg-purple-500'></label>
    </div>
  );
};
