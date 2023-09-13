import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);

    const isCarriageVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCarriagePosition(event?.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (event: any) => {
        setCarriagePosition(event?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div className={classNames(styles.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={styles.carriageWrapper}>
                <input
                    ref={ref}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCarriageVisible && (
                    <span
                        className={styles.carriage}
                        style={{ left: `${carriagePosition * 7.3}px` }}
                    />
                )}
            </div>
        </div>
    );
});
