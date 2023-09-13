import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_IVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        size = ButtonSize.M,
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };
    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [
                className,
                styles[theme],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
