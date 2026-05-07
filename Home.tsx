import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Wrench } from 'lucide-react';

export function Home() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] rounded-lg overflow-hidden group industrial-border bg-zinc-800 flex items-center shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2600" 
            alt="Veoautode hooldus ja remont" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: "repeating-linear-gradient(45deg, #18181b, #18181b 10px, #27272a 10px, #27272a 20px)" }} />
        </div>

        <div className="relative z-20 p-8 md:p-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
             <div className="inline-block bg-[#F97316] text-black font-extrabold text-[10px] px-3 py-1.5 mb-6 rounded uppercase tracking-widest">
                Asutatud 2026
             </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase leading-none">
              Kvaliteetne<br/>
              <span className="text-[#F97316]">
                remont ja hooldus
              </span>
            </h1>
            <p className="text-sm md:text-base text-zinc-300 mb-10 max-w-lg leading-relaxed font-medium">
               Oleme pühendunud usaldusväärse ja kiire remonditeenuse pakkumisele. Meie professionaalne meeskond taba, et te sõidukid on alati töökindlad.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F97316] text-black px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors hover:bg-orange-600"
               >
                Vaata teenuseid <ArrowRight size={16} />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white border border-zinc-500/50 px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors hover:bg-white/5"
               >
                Küsi hinnapakkumist
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            {
              icon: ShieldCheck, 
              title: "Usaldusväärne Partner", 
              desc: "Meie kogenud mehaanikute meeskond kasutab kaasaegset tehnoloogiat, et teostada kõik hooldus- ja remonditööd pikaajalise kvaliteediga."
            },
            {
              icon: Clock, 
              title: "Operatiivne Teenindus", 
              desc: "Teame, et seisakud maksavad. Pühendume kiirele ja efektiivsele töövoole, tuues sinu sõiduki kiiresti teele tagasi."
            },
            {
              icon: Wrench, 
              title: "Rasketehnikale Kohandatud", 
              desc: "Meil on pikaajaline kogemus veoautode ja rasketehnika remontimisel ning kvaliteetsete rehvilahenduste pakkumisel."
            }
          ].map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-[#141414] industrial-border rounded-lg p-8 hover:border-orange-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center mb-6">
                <f.icon className="text-[#F97316]" size={24} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">{f.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
      </section>
      
      {/* Short CTA Section */}
      <section className="bg-[#F97316] rounded-lg p-12 md:p-20 text-center selection:bg-black selection:text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ background: "repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tighter uppercase leading-none">Kas vajate kiiret abi sõidukiga?</h2>
          <p className="text-black/80 text-sm md:text-base mb-10 font-semibold max-w-xl mx-auto">Meie eksperdid on valmis teid alati aitama. Broneerige aeg remondiks või hooldustöödeks juba täna.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-black text-[#F97316] px-8 py-3 rounded text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Võta ühendust logistikaga
          </Link>
        </div>
      </section>
    </div>
  );
}
