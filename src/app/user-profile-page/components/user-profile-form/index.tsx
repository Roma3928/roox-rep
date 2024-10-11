import { FC, FormEvent, useState } from 'react';
import { IUsersResponse } from '../../../../api/public/users/IUsersApi';
import Button from '../../../../components/ui/button';
import Input from '../../../../components/ui/input';
import styles from '../user-profile-form/UserProfileForm.module.scss';
import { useActions } from '../../../../hooks/useActions';
import Textarea from '../../../../components/ui/textarea';

interface IProps {
  user: IUsersResponse;
  isFormDisabled: boolean;
}

const UserProfileForm: FC<IProps> = ({ user, isFormDisabled }) => {
  const { updateUserProfile } = useActions();
  const [nameValue, setNameValue] = useState(user.name || '');
  const [userNameValue, setUserNameValue] = useState(user.username || '');
  const [emailValue, setEmailValue] = useState(user.email || '');
  const [streetValue, setStreetValue] = useState(user.address.street || '');
  const [cityValue, setCityValue] = useState(user.address.city || '');
  const [zipCodeValue, setZipCodeValue] = useState(user.address.zipcode || '');
  const [phoneValue, setPhoneValue] = useState(user.phone || '');
  const [websiteValue, setWebsiteValue] = useState(user.website || '');
  const [commentValue, setCommentValue] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    userName: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    phone: '',
    website: '',
  });

  const validateFields = () => {
    const newErrors = {
      name: nameValue ? '' : 'Имя обязательно для заполнения',
      userName: userNameValue ? '' : 'Поле обязательно для заполнения',
      email: emailValue ? '' : 'Поле обязательно для заполнения',
      street: streetValue ? '' : 'Поле обязательно для заполнения',
      city: cityValue ? '' : 'Поле обязательно для заполнения',
      zipCode: zipCodeValue ? '' : 'Поле обязательно для заполнения',
      phone: phoneValue ? '' : 'Поле обязательно для заполнения',
      website: websiteValue ? '' : 'Поле обязательно для заполнения',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const clearError = (fieldName: keyof typeof errors) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateFields()) {
      console.log('Данные: ', {
        ...user,
        name: nameValue,
        username: userNameValue,
        email: emailValue,
        address: { ...user.address, street: streetValue, city: cityValue, zipcode: zipCodeValue },
        phone: phoneValue,
        website: websiteValue,
        comment: commentValue,
      });

      updateUserProfile({
        ...user,
        name: nameValue,
        username: userNameValue,
        email: emailValue,
        address: { ...user.address, street: streetValue, city: cityValue, zipcode: zipCodeValue },
        phone: phoneValue,
        website: websiteValue,
        comment: commentValue,
      });
    }
  };

  return (
    <form className={styles['user-profile-form']} onSubmit={handleSubmit}>
      <div className={styles['user-profile-inputs']}>
        <Input
          label="Name"
          value={nameValue}
          setValue={setNameValue}
          error={errors.name}
          clearError={() => clearError('name')}
          type="text"
          disabled={isFormDisabled}
        />
        <Input
          label="User name"
          value={userNameValue}
          setValue={setUserNameValue}
          error={errors.userName}
          clearError={() => clearError('userName')}
          type="text"
          disabled={isFormDisabled}
        />
        <Input
          label="E-mail"
          value={emailValue}
          setValue={setEmailValue}
          error={errors.email}
          clearError={() => clearError('email')}
          type="email"
          disabled={isFormDisabled}
        />
        <Input
          label="Street"
          value={streetValue}
          setValue={setStreetValue}
          error={errors.street}
          clearError={() => clearError('street')}
          type="text"
          disabled={isFormDisabled}
        />
        <Input
          label="City"
          value={cityValue}
          setValue={setCityValue}
          error={errors.city}
          clearError={() => clearError('city')}
          type="text"
          disabled={isFormDisabled}
        />
        <Input
          label="Zip code"
          value={zipCodeValue}
          setValue={setZipCodeValue}
          error={errors.zipCode}
          clearError={() => clearError('zipCode')}
          type="number"
          disabled={isFormDisabled}
        />
        <Input
          label="Phone"
          value={phoneValue}
          setValue={setPhoneValue}
          error={errors.phone}
          clearError={() => clearError('phone')}
          type="tel"
          disabled={isFormDisabled}
        />
        <Input
          label="Website"
          value={websiteValue}
          setValue={setWebsiteValue}
          error={errors.website}
          clearError={() => clearError('website')}
          type="text"
          disabled={isFormDisabled}
        />
        <Textarea
          label="Comment"
          value={commentValue}
          setValue={setCommentValue}
          disabled={isFormDisabled}
        />
      </div>
      <div className={styles['user-profile-form-button']}>
        <Button disabled={isFormDisabled}>Отправить</Button>
      </div>
    </form>
  );
};

export default UserProfileForm;
