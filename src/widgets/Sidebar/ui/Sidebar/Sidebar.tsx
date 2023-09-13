import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SideBarItemsList } from './model/items';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () => SideBarItemsList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        )),
        [collapsed],
    );

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                size={ButtonSize.L}
                square
                theme={ButtonTheme.BACKGROUND_IVERTED}
                className={styles.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>{itemsList}</div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
});
