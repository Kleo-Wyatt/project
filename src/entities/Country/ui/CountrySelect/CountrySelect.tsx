import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = Object.values(Country).map((value) => ({
    value,
    content: value,
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const { t } = useTranslation();
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
