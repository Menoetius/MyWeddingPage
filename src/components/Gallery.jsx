import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Load gallery images dynamically
const galleryImages = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true })
const galleryItems = Object.values(galleryImages).map((mod, index) => ({
    src: mod.default,
    alt: `Wedding ${index + 1}`
}))

export default function Gallery({ onLightboxToggle }) {
    const { t } = useTranslation()
    const [selectedIndex, setSelectedIndex] = useState(null)

    // Ensure we don't try to access index out of bounds if images change
    useEffect(() => {
        if (selectedIndex !== null && selectedIndex >= galleryItems.length) {
            setSelectedIndex(null)
        }
    }, [galleryItems.length, selectedIndex])

    const handleImageSelect = (index) => {
        setSelectedIndex(index)
        onLightboxToggle(true)
    }

    const handleClose = () => {
        setSelectedIndex(null)
        onLightboxToggle(false)
    }

    const handleNext = useCallback((e) => {
        e?.stopPropagation()
        setSelectedIndex((prev) => (prev + 1) % galleryItems.length)
    }, [galleryItems.length])

    const handlePrev = useCallback((e) => {
        e?.stopPropagation()
        setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    }, [galleryItems.length])

    useEffect(() => {
        if (selectedIndex === null) return

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'Escape') handleClose()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedIndex, handleNext, handlePrev])

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
                            onClick={() => handleImageSelect(index)}
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
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-paris-blue/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white hover:text-champagne transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={handlePrev}
                            className="absolute left-4 text-white hover:text-champagne transition-colors p-2 z-50"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 text-white hover:text-champagne transition-colors p-2 z-50"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <motion.img
                            key={selectedIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={galleryItems[selectedIndex].src}
                            alt={galleryItems[selectedIndex].alt}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
