import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
// Load hero image dynamically
const heroImages = import.meta.glob('../assets/hero/*.{png,jpg,jpeg,webp}', { eager: true })
const featuredPhoto = Object.values(heroImages)[0]?.default

export default function Hero() {
    const { t } = useTranslation()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="h-screen flex flex-col items-center justify-center bg-bone overflow-hidden relative">
            {/* Decorative backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-paris-blue/5 pointer-events-none"
            />

            <div className="relative z-10 text-center space-y-1 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-serif text-xs md:text-sm text-oil-blue/80 tracking-[0.3em] uppercase mb-1"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                    className="text-8xl md:text-[10rem] text-paris-blue leading-none"
                >
                    {t('hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="font-serif text-oil-blue tracking-widest uppercase text-sm md:text-base"
                >
                    {t('hero.date')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="pt-4"
                >
                    <div className="w-full max-w-4xl aspect-[16/10] mx-auto bg-paris-blue/5 border-2 border-paris-blue/10 p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.3)] group">
                        <motion.img
                            src={featuredPhoto}
                            alt="Anetka and Andrejko"
                            className="w-full h-full object-cover rounded-2xl transition-all duration-1000 ease-in-out group-hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 animate-bounce"
            >
                <span className="text-paris-blue/90 font-serif text-sm tracking-widest uppercase">{t('hero.scrollExplore')}</span>
            </motion.div>
        </section>
    )
}
