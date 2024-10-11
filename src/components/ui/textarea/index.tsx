import { FC, ChangeEvent, TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';
import classNames from 'classnames';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  clearError?: () => void;
}

const Textarea: FC<IProps> = ({
  label,
  placeholder,
  value,
  setValue,
  error,
  clearError,
  disabled,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);

    if (e.target.value) {
      clearError?.();
    }
  };

  return (
    <div className={styles['textarea-container']}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={classNames(styles.textarea, {
          [styles['textarea-error']]: error,
          [styles['disabled']]: disabled,
        })}
        disabled={disabled}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Textarea;
