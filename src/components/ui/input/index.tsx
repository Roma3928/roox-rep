import { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  clearError?: () => void;
}

const Input: FC<IProps> = ({
  label,
  placeholder,
  type,
  value,
  setValue,
  error,
  clearError,
  disabled,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value) {
      clearError?.();
    }
  };

  return (
    <div className={styles['input-container']}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={classNames(styles.input, {
          [styles['input-error']]: error,
          [styles['disabled']]: disabled,
        })}
        disabled={disabled}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
