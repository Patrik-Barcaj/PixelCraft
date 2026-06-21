import { motion } from "framer-motion"; // Import framer motion
import { Zap, Target, Users } from "lucide-react"; // Import icons
export default function About() { // Component definition
  return ( // Return JSX
    <section className="w-full max-w-full px-4 md:max-w-7xl mx-auto flex flex-col justify-center"> {/* About container */}

      <motion.div /* Animated header */
        initial={{ opacity: 0, y: -20 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Animate into view */
        className="text-center mb-8 md:mb-12 lg:mb-16" /* Header styling */
      > {/* Close motion div */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-4 md:mb-6 drop-shadow-lg">About Pixel Craft</h1> {/* Section title */}
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-medium px-4">We are a dedicated collective of developers and artists, forging digital environments that breathe, react, and leave a lasting impression.</p> {/* Section subtitle */}
      </motion.div> {/* Close animated header */}

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"> {/* Values grid */}
        <motion.div /* Value 1 card */
          key="v1" /* React key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 0.1 }} /* Stagger delay */
          className="glass-panel p-8 md:p-10 rounded-2xl group hover:border-brand-yellow/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-xl bg-black/60 w-full" /* Card styling */
        > {/* Close motion div */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full -z-10 group-hover:bg-brand-yellow/10 transition-colors duration-500 blur-xl" /> {/* Decorative glow */}
          <Zap className="w-10 h-10 text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(220,221,0,0.5)]" /> {/* Icon */}
          <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Relentless Innovation</h3> {/* Title */}
          <p className="text-gray-400 leading-relaxed text-base">We push the boundaries of modern technology to craft immersive and highly reactive experiences that captivate players.</p> {/* Description */}
        </motion.div> {/* Close card */}

        <motion.div /* Value 2 card */
          key="v2" /* React key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 0.2 }} /* Stagger delay */
          className="glass-panel p-8 md:p-10 rounded-2xl group hover:border-brand-yellow/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-xl bg-black/60 w-full" /* Card styling */
        > {/* Close motion div */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full -z-10 group-hover:bg-brand-yellow/10 transition-colors duration-500 blur-xl" /> {/* Decorative glow */}
          <Target className="w-10 h-10 text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(220,221,0,0.5)]" /> {/* Icon */}
          <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Precision Execution</h3> {/* Title */}
          <p className="text-gray-400 leading-relaxed text-base">Every line of code and every pixel is placed with intent, ensuring optimized performance without sacrificing aesthetic quality.</p> {/* Description */}
        </motion.div> {/* Close card */}

        <motion.div /* Value 3 card */
          key="v3" /* React key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 0.3 }} /* Stagger delay */
          className="glass-panel p-8 md:p-10 rounded-2xl group hover:border-brand-yellow/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-xl bg-black/60 w-full sm:col-span-2 lg:col-span-1" /* Card styling */
        > {/* Close motion div */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full -z-10 group-hover:bg-brand-yellow/10 transition-colors duration-500 blur-xl" /> {/* Decorative glow */}
          <Users className="w-10 h-10 text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(220,221,0,0.5)]" /> {/* Icon */}
          <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Collaborative Spirit</h3> {/* Title */}
          <p className="text-gray-400 leading-relaxed text-base">We work closely with creators to bring their visions to life, blending their unique ideas with our technical expertise.</p> {/* Description */}
        </motion.div> {/* Close card */}
      </div> {/* Close grid */}
    </section>
  ); // Close return
} // Close component
