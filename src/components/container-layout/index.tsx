import { FC, ReactNode } from 'react';
import styles from './ContainerLayout.module.scss';

interface IProps {
  children: ReactNode;
}

const ContainerLayout: FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerLayout;
