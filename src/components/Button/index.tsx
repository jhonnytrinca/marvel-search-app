import { ReactNode } from 'react';

/** Componente Button
 *
 * @param {ReactNode | Element} children - item a ser renderizado dentro do botão
 * @param {Function} onClick - função de retorno ao clicar no botão
 * @param {string} className - classes adicionais de estilização
 * @param {string} type - indicador de tipo do botão. Padrão: 'button'
 * @param {string} dataCy - nome do campo para localização em testes
 * @param {boolean} disabled - boolean que informa se o botão está desativado ou não
 *
 */

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  dataCy?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  className,
  type,
  dataCy,
  disabled,
  ...rest
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={className}
    type={type || 'button'}
    disabled={disabled}
    {...rest}
    data-cy={dataCy || 'button'}
  >
    {children}
  </button>
);
