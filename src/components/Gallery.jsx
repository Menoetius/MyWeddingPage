import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { X } from 'lucide-react'

// Import relevant assets
import img3 from '../assets/20240217_095130.jpg'
import img4 from '../assets/20240219_173604.jpg'
import img5 from '../assets/20240220_152545.jpg'
import img6 from '../assets/20240920_115002.jpg'
import img7 from '../assets/20241015_144852.jpg'
import img8 from '../assets/20250501_173631.jpg'

export default function Gallery() {
    const { t } = useTranslation()
    const [selectedImage, setSelectedImage] = useState(null)

    const galleryItems = [
        { src: img3, alt: "Wedding 3" },
        { src: img4, alt: "Wedding 4" },
        { src: img5, alt: "Wedding 5" },
        { src: img6, alt: "Wedding 6" },
        { src: img7, alt: "Wedding 7" },
        { src: img8, alt: "Wedding 8" },
    ]

    return (
        <section id="gallery" className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic">{t('gallery.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                    <p className="text-oil-blue/90 font-serif italic mt-4">{t('gallery.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="absolute inset-0 bg-paris-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 flex items-center justify-center">
                                <span className="text-white font-serif italic tracking-widest uppercase text-sm">{t('gallery.viewPhoto')}</span>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-700 group-hover:scale-[1.02] aspect-square">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-paris-blue/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white hover:text-champagne transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
