import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBarItemType } from '../Sidebar/model/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

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
