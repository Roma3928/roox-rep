import { useEffect } from 'react';
import Head from '../../components/head';
import ItemCount from '../../components/item-count';
import Loader from '../../components/ui/loader';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import UserList from './components/user-list';

const HomePage = () => {
  const { fetchUsers } = useActions();
  const { users, isLoading, totalCount } = useTypedSelector((state) => state.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Head title="Список пользователей" />
      {isLoading && <Loader />}

      {!isLoading && <UserList users={users} />}
      <ItemCount
        itemNameVariants={{ one: 'пользователь', few: 'пользователя', many: 'пользователей' }}
        count={totalCount}
      />
    </>
  );
};

export default HomePage;
