import { Building2, Bed, Star, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Accommodation() {
    const { t } = useTranslation()
    const hotels = t('accommodation.hotels', { returnObjects: true })

    return (
        <section id="accommodation" className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl text-paris-blue font-serif italic">{t('accommodation.title')}</h2>
                    <div className="w-24 h-px bg-paris-blue/20 mx-auto" />
                    <p className="text-oil-blue/90 font-serif italic mt-4">{t('accommodation.subtitle')}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {Array.isArray(hotels) && hotels.map((hotel, index) => (
                        <div key={index} className="bg-bone/30 p-8 rounded-[32px] border border-paris-blue/5 shadow-premium space-y-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-paris-blue/5 rounded-2xl text-paris-blue">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(hotel.stars || 0)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-paris-blue text-paris-blue" />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl text-paris-blue font-serif italic leading-tight">{hotel.name}</h3>
                                    <p className="text-oil-blue/90 font-serif text-sm leading-relaxed">{hotel.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {Array.isArray(hotel.amenities) && hotel.amenities.map((amenity, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-widest text-paris-blue/60 border border-paris-blue/20 px-3 py-1 rounded-full bg-white/50">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 space-y-4 border-t border-paris-blue/5">
                                <div className="flex items-center gap-2 text-paris-blue/70 text-xs font-serif uppercase tracking-widest">
                                    <Bed className="w-3 h-3" />
                                    <span>{hotel.distance}</span>
                                </div>
                                <button className="w-full py-3 bg-paris-blue/5 text-paris-blue rounded-xl font-serif text-sm tracking-widest uppercase flex items-center justify-center gap-2 group-hover:bg-paris-blue group-hover:text-white transition-all duration-300">
                                    <span>{t('accommodation.bookNow')}</span>
                                    <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
