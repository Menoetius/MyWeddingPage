import { motion } from 'framer-motion'
import { MapPin, Clock, Heart, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Details() {
    const { t } = useTranslation()
    const weddingDetails = t('details.items', { returnObjects: true })

    return (
        <section id="details" className="py-24 bg-bone px-4 relative overflow-hidden">
            {/* Decorative floral background element placeholder */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-paris-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-paris-blue/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic text-balance">{t('details.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Array.isArray(weddingDetails) && weddingDetails.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-paris-blue/5 shadow-premium space-y-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-paris-blue/10 rounded-full flex items-center justify-center text-paris-blue group-hover:bg-paris-blue group-hover:text-white transition-colors duration-500">
                                {index === 0 ? <Heart className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-3xl text-paris-blue font-serif italic">{item.title}</h3>
                                <div className="space-y-2 text-oil-blue/80 font-serif">
                                    <div className="flex items-center justify-center gap-2">
                                        <Clock className="w-4 h-4 opacity-80" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <MapPin className="w-4 h-4 opacity-80" />
                                        <span className="font-medium">{item.location}</span>
                                    </div>
                                    <p className="opacity-80 max-w-[300px] mx-auto">{item.address}</p>
                                    {item.websiteUrl && (
                                        <a
                                            href={item.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-oil-blue hover:text-oil-blue/80 transition-colors duration-300 flex items-center justify-center gap-1.5 pt-1 underline underline-offset-4"
                                        >
                                            <Globe className="w-3 h-3" />
                                            <span>{new URL(item.websiteUrl).hostname}</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 border border-paris-blue/60 rounded-full text-paris-blue text-sm uppercase tracking-widest hover:bg-paris-blue hover:text-white transition-all duration-300 inline-block"
                            >
                                {t('details.viewMap')}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
