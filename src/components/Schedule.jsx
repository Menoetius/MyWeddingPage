import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Music, Coffee, GlassWater, Utensils, Star, Camera } from 'lucide-react'

export default function Schedule() {
    const { t } = useTranslation()

    const timeline = [
        { time: "3:00 PM", event: t('schedule.events.ceremony'), icon: <Star className="w-5 h-5" /> },
        { time: "4:00 PM", event: t('schedule.events.photos'), icon: <Camera className="w-5 h-5" /> },
        { time: "5:00 PM", event: t('schedule.events.welcome'), icon: <GlassWater className="w-5 h-5" /> },
        { time: "6:00 PM", event: t('schedule.events.dinner'), icon: <Utensils className="w-5 h-5" /> },
        { time: "8:00 PM", event: t('schedule.events.dance'), icon: <Music className="w-5 h-5" /> },
        { time: "9:00 PM", event: t('schedule.events.coffee'), icon: <Coffee className="w-5 h-5" /> },
    ]

    return (
        <section id="schedule" className="py-24 bg-white px-4">
            <div className="max-w-3xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic">{t('schedule.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                    <p className="text-oil-blue/90 font-serif italic mt-4">{t('schedule.subtitle')}</p>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-paris-blue/20 transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 text-center md:text-left space-y-1 w-full">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} items-center`}>
                                        <div className="bg-paris-blue/5 p-6 rounded-2xl border border-paris-blue/10 w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
                                            <span className="text-paris-blue font-serif font-bold tracking-widest block mb-2">{item.time}</span>
                                            <h3 className="text-2xl text-oil-blue font-serif italic">{item.event}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 w-12 h-12 bg-white border-2 border-paris-blue rounded-full flex items-center justify-center text-paris-blue shadow-md">
                                    {item.icon}
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
