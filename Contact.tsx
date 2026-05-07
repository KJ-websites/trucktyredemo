import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="flex-1 lg:p-8">
      <div className="max-w-7xl mx-auto">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-12 bg-zinc-900 industrial-border rounded-lg p-8"
        >
          <div className="inline-block bg-[#F97316] text-black font-extrabold text-[10px] px-3 py-1.5 mb-6 rounded uppercase tracking-widest">
             Oleme Teile Olemas
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
             Võta <span className="text-[#F97316]">Ühendust</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
             Leidke meid alltoodud aadressil, helistage või saatke meile päring otse läbi kodulehe. Vastame kõikidele päringutele ühe tööpäeva jooksul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Info and Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-6"
          >
             <div className="bg-[#141414] industrial-border rounded-lg p-6 lg:p-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-6">Saada päring</h3>
                <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                   <input type="text" id="name" className="w-full transition-colors focus:border-[#F97316]" placeholder="Nimi" required />
                   <input type="email" id="email" className="w-full transition-colors focus:border-[#F97316]" placeholder="E-post" required />
                   <input type="text" id="vehicle" className="w-full transition-colors focus:border-[#F97316]" placeholder="Sõiduki mark/mudel" />
                   <textarea id="message" rows={4} className="w-full transition-colors focus:border-[#F97316] resize-none" placeholder="Sõnum / Mure" required></textarea>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-black font-bold uppercase text-xs tracking-widest py-3 rounded hover:bg-orange-600 transition-colors mt-2">
                    Saada kiri <Send size={14} className="ml-1" />
                  </button>
                </form>
             </div>
          </motion.div>

          {/* Map Embed and Contact Details */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ delay: 0.3, duration: 0.6 }}
             className="flex flex-col gap-6"
          >
             <div className="bg-zinc-900 industrial-border rounded-lg relative overflow-hidden flex flex-col shadow-2xl h-full">
                <div className="flex-grow w-full relative min-h-[300px]">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.5516049386348!2d26.34759901594958!3d59.34969298166548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46927a4e69b5fd25%3A0xe5a3c9be08eaede1!2zTcO1aXNhdsOkbGphIDctMSwgNDQzMTQgUmFrdmVyZSwgRXN0b25pYQ!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full object-cover grayscale-[80%] hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity hover:mix-blend-normal"
                      title="TRUCKTYRE OÜ Asukoht Rakveres"
                    ></iframe>
                    <div className="absolute top-4 left-4 flex items-center justify-center pointer-events-none">
                      <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                      <span className="text-[10px] font-bold ml-2 text-white bg-black/50 px-2 py-1 uppercase tracking-wider backdrop-blur-sm rounded">Mõisavälja tn 7-1, Rakvere</span>
                    </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col space-y-4 bg-zinc-900 border-t border-zinc-500/20">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] border-b border-zinc-800 pb-3 gap-2">
                    <span className="text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-2"><MapPin size={14} className="text-[#F97316]"/> Aadress:</span>
                    <span className="text-white font-semibold">Mõisavälja tn 7-1, Rakvere</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] border-b border-zinc-800 pb-3 gap-2">
                    <span className="text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-2"><Clock size={14} className="text-[#F97316]"/> Avatud:</span>
                    <span className="text-white font-semibold">E-R 08:00 - 18:00</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] border-b border-zinc-800 pb-3 gap-2">
                    <span className="text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-2"><Phone size={14} className="text-[#F97316]"/> Telefon:</span>
                    <span className="text-white font-semibold">+372 5555 5555</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] gap-2">
                    <span className="text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-2"><Mail size={14} className="text-[#F97316]"/> E-post:</span>
                    <span className="text-white font-semibold">info@trucktyre.ee</span>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
