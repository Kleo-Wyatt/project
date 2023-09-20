import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, readonly, onChange } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
    };

    const optionsList = useMemo(
        () => options?.map((element) => (
            <option
                className={styles.option}
                value={element.value}
                key={element.value}
            >
                {element.content}
            </option>
        )),
        [options],
    );

    const mods: Mods = {};

    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
            {label && <span className={styles.label}>{`${label}>`}</span>}
            <select
                value={value}
                onChange={onChangeHandler}
                className={styles.select}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
