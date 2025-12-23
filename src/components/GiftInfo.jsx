import { useTranslation } from 'react-i18next'
export default function GiftInfo() {
    const { t } = useTranslation()
    return <section className='py-20'>{t('nav.gifts')}</section>;
}
