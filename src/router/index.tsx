import HomePage from '../app/home-page';
import UserProfilePage from '../app/user-profile-page';
import DashboardLayout from '../components/dashboard-layout';

export const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'user-info/:id',
        element: <UserProfilePage />,
      },
      {
        path: '*',
        element: <h1>Нет страницы</h1>,
      },
    ],
  },
];
