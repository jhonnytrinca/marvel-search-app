import { ReactNode } from 'react';

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
  <button onClick={onClick} className={className} type={type} {...rest}>
    {children}
  </button>
);
