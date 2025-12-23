import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="py-24 bg-paris-blue text-white text-center px-4 overflow-hidden relative">
            {/* Decorative backgrounds */}
            <div className="absolute top-0 left-1/2 -translated-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl -mt-48" />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-bone">{t('footer.names')}</h2>
                    <p className="text-bone/60 font-serif tracking-[0.2em] uppercase text-xs">{t('footer.dateLocation')}</p>
                </div>

                <div className="w-16 h-px bg-bone/20 mx-auto" />

                <div className="space-y-6">
                    <p className="font-serif italic text-xl md:text-2xl text-bone">{t('footer.quote')}</p>
                    <p className="text-bone/60 text-sm max-w-md mx-auto leading-relaxed">
                        {t('footer.thanks')}
                    </p>
                </div>

                <div className="pt-12">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40">{t('footer.madeWith')}</p>
                </div>
            </div>
        </footer>
    )
}
