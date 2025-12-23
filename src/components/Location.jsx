import { motion } from 'framer-motion'
import { MapPin, Navigation, Car } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import WeddingMap from './WeddingMap'

export default function Location() {
    const { t } = useTranslation()

    return (
        <section id="location" className="py-24 bg-bone px-4">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic">{t('location.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl text-paris-blue font-serif italic">{t('location.gettingThere')}</h3>
                            <p className="text-oil-blue/80 font-serif leading-relaxed">
                                {t('location.description')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 p-2 bg-paris-blue/10 rounded-lg text-paris-blue">
                                    <Car className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-paris-blue">{t('location.byCar')}</h4>
                                    <p className="text-sm text-oil-blue/90">{t('location.parking')}</p>
                                </div>
                            </div>

                        </div>

                        <div className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-paris-blue/5 border-l-4 border-l-paris-blue">
                            <div className="flex gap-4">
                                <Navigation className="w-6 h-6 text-paris-blue shrink-0" />
                                <div className="space-y-1">
                                    <p className="font-serif text-oil-blue italic">"{t('location.quote')}"</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-[400px] lg:h-full bg-paris-blue/5 rounded-3xl overflow-hidden border-2 border-paris-blue/10 shadow-inner order-1 lg:order-2 group relative"
                    >
                        <WeddingMap />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
