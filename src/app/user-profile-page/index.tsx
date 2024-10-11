import { useEffect, useState } from 'react';
import Head from '../../components/head';
import Loader from '../../components/ui/loader';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../../components/ui/button';
import { useParams } from 'react-router-dom';
import UserProfileForm from './components/user-profile-form';

const UserProfilePage = () => {
  const { fetchUserById } = useActions();
  const { user, isLoading } = useTypedSelector((state) => state.userInfo);
  const { id } = useParams();
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  useEffect(() => {
    if (id) {
      fetchUserById({ id });
    }
  }, []);

  const toggleEditingMode = () => {
    setIsFormDisabled(!isFormDisabled);
  };

  return (
    <>
      <Head title="Профиль пользоваетля">
        <Button onClick={toggleEditingMode}>
          {isFormDisabled ? 'Редактировать' : 'Завершить редактирование'}
        </Button>
      </Head>
      {isLoading && <Loader />}
      {!isLoading && user && <UserProfileForm user={user} isFormDisabled={isFormDisabled} />}
    </>
  );
};

export default UserProfilePage;
