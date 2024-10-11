import { FC, ReactNode } from 'react';
import styles from './Head.module.scss';

interface IProps {
  title: string;
  children?: ReactNode;
}

const Head: FC<IProps> = ({ title, children }) => {
  return (
    <div className={styles.head}>
      <h2 className={styles['head-title']}>{title}</h2>
      {children}
    </div>
  );
};

export default Head;
