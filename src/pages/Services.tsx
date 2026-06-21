import { motion } from "framer-motion"; // Import framer motion
import { Code, Monitor, Gamepad2 } from "lucide-react"; // Import icons

export default function Services() { // Component definition
  return ( // Return JSX
    <section className="w-full max-w-full px-4 md:max-w-7xl mx-auto flex flex-col justify-center"> {/* Services container */}

      <motion.div /* Animated header */
        initial={{ opacity: 0, y: -20 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Animate into view */
        className="text-center mb-4 md:mb-8 lg:mb-16" /* Header styling */
      > {/* Close motion div */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-4 md:mb-6 drop-shadow-lg">Our Services</h1> {/* Section title */}
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-medium px-4">Bridging the gap between raw vision and flawless execution in game development.</p> {/* Section subtitle */}
      </motion.div> {/* Close animated header */}

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"> {/* Services grid */}
        <motion.div /* Service 1 card */
          key="s1" /* Key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 0.1 }} /* Stagger delay */
          className="glass-panel p-10 md:p-12 rounded-2xl group hover:border-brand-yellow/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-xl bg-black/60 cursor-pointer w-full h-full" /* Card styling */
        > {/* Close motion div */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-bl-full -z-10 group-hover:bg-brand-yellow/10 transition-colors duration-500 blur-xl" /> {/* Decorative corner glow */}
          <Code className="w-12 h-12 text-brand-yellow mb-8 group-hover:rotate-6 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(220,221,0,0.5)]" /> {/* Icon */}
          <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">Development Assistance</h3> {/* Title */}
          <p className="text-gray-400 leading-relaxed text-lg">Code optimization, logic debugging, and robust system architecture designed to scale seamlessly across platforms.</p> {/* Description */}
        </motion.div> {/* Close card */}

        <motion.div /* Service 2 card */
          key="s2" /* Key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 0.2 }} /* Stagger delay */
          className="glass-panel p-10 md:p-12 rounded-2xl group hover:border-brand-yellow/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-xl bg-black/60 cursor-pointer w-full h-full" /* Card styling */
        > {/* Close motion div */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-bl-full -z-10 group-hover:bg-brand-yellow/10 transition-colors duration-500 blur-xl" /> {/* Decorative corner glow */}
          <Monitor className="w-12 h-12 text-brand-yellow mb-8 group-hover:-rotate-6 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(220,221,0,0.5)]" /> {/* Icon */}
          <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">Pixel-Perfect Editing</h3> {/* Title */}
          <p className="text-gray-400 leading-relaxed text-lg">Immaculate sprite cleanup, dynamic UI asset creation, and flawless 2D rendering techniques for a polished look.</p> {/* Description */}
        </motion.div> {/* Close card */}

        <motion.div /* Service 3 card */
          key="s3" /* Key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 0.3 }} /* Stagger delay */
          className="glass-panel p-10 md:p-12 rounded-2xl group hover:border-brand-yellow/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-xl sm:col-span-2 lg:col-span-1 bg-black/60 cursor-pointer w-full h-full" /* Card styling */
        > {/* Close motion div */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-bl-full -z-10 group-hover:bg-brand-yellow/10 transition-colors duration-500 blur-xl" /> {/* Decorative corner glow */}
          <Gamepad2 className="w-12 h-12 text-brand-yellow mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(220,221,0,0.5)]" /> {/* Icon */}
          <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">Game Prototyping</h3> {/* Title */}
          <p className="text-gray-400 leading-relaxed text-lg">Rapidly turn concepts into playable prototypes with clean code and temporary but highly aesthetic placeholder art.</p> {/* Description */}
        </motion.div>
      </div> {/* Close grid */}
    </section>
  ); // Close return
} // Close component
