import { useTranslation } from 'react-i18next'
export default function EventDetails() {
    const { t } = useTranslation()
    return <section className='py-20 bg-stone-50'>{t('nav.details')}</section>;
}
