import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import PinkIcon from 'shared/assets/icons/theme-pink.svg';
import { classNames } from 'shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    let iconComponent;

    if (theme === Theme.DARK) {
        iconComponent = <DarkIcon />;
    } else if (theme === Theme.PINK) {
        iconComponent = <PinkIcon />;
    } else {
        iconComponent = <LightIcon />;
    }

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
            {iconComponent}
        </Button>
    );
});
