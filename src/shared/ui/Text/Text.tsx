import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div className={classNames('', { [styles[theme]]: true }, [className])}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};
