import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import storyPhoto from '../assets/20220527_203707_1.jpg'

export default function Story() {
    const { t } = useTranslation()

    return (
        <section id="story" className="py-24 bg-white px-4">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic">{t('story.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-oil-blue leading-relaxed font-serif text-lg"
                    >
                        <p>
                            {t('story.p1')}
                        </p>
                        <p>
                            {t('story.p2')}
                        </p>
                        <p className="italic font-medium text-oil-blue">
                            "{t('story.quote')}"
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-paris-blue/10 rounded-2xl -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
                        <div className="relative aspect-[4/5] bg-bone rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={storyPhoto}
                                alt="Our Story"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-paris-blue/10 mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
