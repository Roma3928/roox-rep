export const routes = [
  {
    path: '/',
    element: <div />,
    children: [
      {
        index: true,
        element: <div />,
      },
      {
        path: 'user-info/:id',
        element: <div />,
      },
      {
        path: '*',
        element: <h1>Нет страницы</h1>,
      },
    ],
  },
];
