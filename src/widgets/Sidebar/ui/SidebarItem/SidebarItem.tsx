import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../Sidebar/model/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(styles.item, {
                [styles.collapsed]: collapsed,
            })}
            theme={AppLinkTheme.INVERTED}
            to={item.path}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    );
});
