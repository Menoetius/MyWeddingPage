import { Gift, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Gifts() {
    const { t } = useTranslation()

    return (
        <section id="gifts" className="py-24 bg-bone px-4">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic">{t('gifts.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-[40px] border border-paris-blue/5 shadow-premium text-center space-y-8 relative overflow-hidden">
                    {/* Decorative background icon */}
                    <Gift className="absolute -top-12 -right-12 w-48 h-48 text-paris-blue/5 -rotate-12" />

                    <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                        <Heart className="w-12 h-12 text-paris-blue/20 mx-auto" />
                        <h3 className="text-3xl text-paris-blue font-serif italic">{t('gifts.mainTitle')}</h3>
                        <p className="text-oil-blue font-serif leading-relaxed text-lg">
                            {t('gifts.p1')}
                        </p>
                        <p className="text-oil-blue/90 font-serif leading-relaxed">
                            {t('gifts.p2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
