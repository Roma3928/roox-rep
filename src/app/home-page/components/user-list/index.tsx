import { FC } from 'react';
import UserCard from '../user-card';
import styles from './UserList.module.scss';
import { IUsersResponse } from '../../../../api/public/users/IUsersApi';

interface IProps {
  users: IUsersResponse[];
}

const UserList: FC<IProps> = ({ users }) => {
  return (
    <div className={styles['user-list']}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          companyName={user.company.name}
          city={user.address.city}
        />
      ))}
    </div>
  );
};

export default UserList;
