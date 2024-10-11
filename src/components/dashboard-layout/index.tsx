import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './DashboardLayout.module.scss';
import Sidebar from '../sidebar';
import ContainerLayout from '../container-layout';

const DashboardLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.main}>
        <ContainerLayout>
          <Outlet />
        </ContainerLayout>
      </main>
    </div>
  );
};

export default DashboardLayout;
