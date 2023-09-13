import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { CustomAvatar } from 'shared/ui/Avatar/CustomAvatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from '../../../../entities/Country';
import { Currency, CurrencySelect } from '../../../../entities/Currency';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(
                    styles.ProfileCard,
                    { [styles.loading]: true },
                    [className],
                )}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(styles.ProfileCard, {}, [
                    className,
                    styles.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.data}>
                <div className={styles.avatarWrapper}>
                    {data?.avatar && (
                        <CustomAvatar
                            className={styles.img}
                            src={data?.avatar}
                            alt="avatar"
                        />
                    )}
                </div>

                <Input
                    className={styles.input}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    className={styles.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    className={styles.input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={styles.input}
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={styles.input}
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    className={styles.input}
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={styles.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={styles.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
