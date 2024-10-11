import { Link } from 'react-router-dom';
import Button from '../ui/button';
import styles from './Sidebar.module.scss';
import { FC, ReactNode } from 'react';
import { useActions } from '../../hooks/useActions';

interface IProps {
  children?: ReactNode;
}

const Sidebar: FC<IProps> = ({ children }) => {
  const { sortByCity, sortByCompany } = useActions();

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles['sidebar-title']}>Сортировка</h3>
      <div className={styles['sidebar-content']}>
        <Button onClick={() => sortByCity()}>по городу</Button>
        <Button onClick={() => sortByCompany()}>по компании</Button>
      </div>

      {children}
    </aside>
  );
};

export default Sidebar;
