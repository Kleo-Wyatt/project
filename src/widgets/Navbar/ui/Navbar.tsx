import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </div>
    );
};
