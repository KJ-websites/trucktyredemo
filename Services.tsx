import { motion } from 'motion/react';
import { Cog, Activity, Wrench, Disc, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'general',
    title: 'Mootorsõidukite Üldremont',
    icon: Wrench,
    desc: 'Teostame kõikvõimalikke remonditöid nii sõiduautodele kui ka rasketehnikale. Pakume lahendusi alates pisivigadest kuni sildade ja käigukastide kapitaalremondini.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'maintenance',
    title: 'Regulaarne Hooldus',
    icon: Cog,
    desc: 'Enneta suuremaid rikkeid õigeaegse hooldusega. Vahetame esmaklassiliste tootjate õlid, filtrid, rihmad ja kontrollime teie sõiduki üldist tehnilist seisukorda.',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostika',
    icon: Activity,
    desc: 'Kaasaegne arvutidiagnostika aitab meil täpselt tuvastada elektrisüsteemide, mootorite ja erinevate juhtplokkide vead spetsiifilise tarkvara abil.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'tires',
    title: 'Rehvitööd',
    icon: Disc,
    desc: 'Veoautode, eritehnika ja sõiduautode rehvivahetus, tasakaalustamine, parandus ja mustri taastamine profiseadmetega – kiirelt ja soodsalt.',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=1000',
  }
];

export function Services() {
  return (
    <div className="flex-1 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-12 max-w-2xl bg-zinc-900 industrial-border rounded-lg p-8"
        >
          <div className="inline-block bg-[#F97316] text-black font-extrabold text-[10px] px-3 py-1.5 mb-6 rounded uppercase tracking-widest">
             Kõik Ühest Kohast
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
             Meie <span className="text-[#F97316]">Teenused</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
             Pakume laia valikut teenuseid standardhooldusest rasketehnika kapitaalremondini. Meie eksperdid hoiavad teie autopargi parimas sõidukorras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
             <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-[#141414] rounded-lg overflow-hidden industrial-border flex flex-col hover:border-[#F97316]/50 transition-colors"
                id={service.id}
             >
               <div className="h-48 sm:h-56 w-full relative overflow-hidden border-b border-zinc-500/20">
                  <div className="absolute inset-0 bg-neutral-950/60 z-10 transition-colors duration-500" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity"
                  />
                  
                  <div className="absolute top-4 left-4 z-20 bg-zinc-800 w-10 h-10 rounded flex items-center justify-center industrial-border group-hover:bg-zinc-700 transition-colors">
                    <service.icon size={20} className="text-[#F97316]" />
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 text-5xl font-extrabold text-white/5 tracking-tighter mix-blend-overlay">
                    0{idx + 1}
                  </div>
               </div>
               
               <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-xs mb-6 flex-1">
                    {service.desc}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#F97316] hover:text-orange-400 transition-colors w-fit"
                  >
                    Küsi hinnapakkumist <ArrowRight size={14} />
                  </Link>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
