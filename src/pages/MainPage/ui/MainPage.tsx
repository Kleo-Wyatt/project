import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
