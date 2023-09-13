import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './CustomAvatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const CustomAvatar = ({ className, src, size, alt }: AvatarProps) => {
    const mods: Mods = {};

    const style = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );
    return (
        <img
            src={src}
            style={style}
            className={classNames(styles.Avatar, mods, [className])}
            alt={alt}
        />
    );
};
