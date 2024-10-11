import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IProps> = ({ disabled, children, className, ...rest }) => {
  const buttonClasses = `
    ${styles.button} 
    ${className || ''}
  `.trim();

  return (
    <button
      className={classNames(buttonClasses, {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
