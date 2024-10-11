import { FC } from 'react';
import styles from './UserCard.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  name: string;
  companyName: string;
  city: string;
}

const UserCard: FC<IProps> = ({ id, name, city, companyName }) => {
  return (
    <div className={styles['user-card']}>
      <p>
        <span>ФИО:</span> {name}
      </p>
      <p>
        <span>город:</span> {city}
      </p>
      <div className={styles['company-name']}>
        <p>
          <span>компания:</span> {companyName}
        </p>
        <Link to={`user-info/${id}`}>Подробнее</Link>
      </div>
    </div>
  );
};

export default UserCard;
