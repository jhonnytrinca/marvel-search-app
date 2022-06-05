import { ReactNode } from 'react';

/** Componente Button
 *
 * @param {ReactNode | Element} children - item a ser renderizado dentro do botão
 * @param {Function} onClick - função de retorno ao clicar no botão
 * @param {string} className - classes adicionais de estilização
 * @param {string} type - indicador de tipo do botão. Padrão: 'button'
 *
 */

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
};

export const Button = ({
  children,
  onClick,
  className,
  type,
  ...rest
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={className}
    type={type || 'button'}
    {...rest}
  >
    {children}
  </button>
);
