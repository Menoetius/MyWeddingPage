import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function LanguageSwitcher({ visible = true }) {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
        { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' }
    ]

    const currentLanguage = languages.find(lang => lang.code === i18n.language.split('-')[0]) || languages[0]

    const toggleLanguage = (code) => {
        i18n.changeLanguage(code)
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative"
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-paris-blue/10 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-paris-blue/30 group"
                    >
                        <Globe className="w-4 h-4 text-paris-blue/60 group-hover:text-paris-blue transition-colors" />
                        <span className="text-sm font-serif italic text-oil-blue">{currentLanguage.label}</span>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl shadow-paris-blue/5 border border-paris-blue/5 overflow-hidden z-50 p-1"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => toggleLanguage(lang.code)}
                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors duration-200 ${i18n.language.startsWith(lang.code)
                                            ? 'bg-paris-blue/5 text-oil-blue'
                                            : 'text-oil-blue/90 hover:bg-paris-blue/5 hover:text-oil-blue'
                                            }`}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="text-sm font-serif">{lang.label}</span>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
