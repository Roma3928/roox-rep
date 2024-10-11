import { FC } from 'react';
import { plural } from '../../utils/plural';
import styles from './ItemCount.modules.scss';

interface ItemCountProps {
  itemNameVariants: { one: string; few: string; many: string };
  count: number;
  locale?: string;
}

const ItemCount: FC<ItemCountProps> = ({ itemNameVariants, count, locale = 'ru-RU' }) => {
  return (
    <div className={styles['item-count']}>
      Найдено {count} {plural(count, itemNameVariants, locale)}
    </div>
  );
};

export default ItemCount;
