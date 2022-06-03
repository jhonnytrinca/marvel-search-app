import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) => (
  <button onClick={onClick} className={className} {...rest}>
    {children}
  </button>
);
