import { motion } from "framer-motion"; // Import framer motion
import { CheckCircle2 } from "lucide-react"; // Import icon
import { Link } from "react-router-dom"; // Import Link

export default function Pricing() { // Define Pricing component
  return ( // Return JSX
    <section className="w-full max-w-full px-4 md:max-w-7xl mx-auto flex flex-col justify-center py-12"> {/* Section container */}
      <motion.div /* Animated header */
        initial={{ opacity: 0, y: -20 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Active state */
        className="text-center mb-8 md:mb-12 lg:mb-16" /* Styling */
      > {/* Close motion div */}
        <h1 className="text-3xl md:text-[4vh] lg:text-[5vh] font-bold uppercase tracking-widest mb-2 md:mb-6 drop-shadow-lg">Mission Costs</h1> {/* Title */}
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-medium px-4">Transparent pricing for premium development and artistic firepower.</p> {/* Subtitle */}
      </motion.div> {/* Close motion div */}

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center w-full mb-20"> {/* Grid layout */}
        <motion.div /* Tier 1 */
          key="p1" /* Key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Active state */
          className="glass-panel p-8 rounded-3xl border border-white/5 relative flex flex-col w-full h-full" /* Styling */
        > {/* Close motion div */}
          <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-2">Prototype</h3> {/* Tier name */}
          <div className="text-3xl font-bold text-white mb-6">Project Based <span className="text-lg text-gray-500 font-normal block mt-1">Milestone Billing</span></div> {/* Price */}
          <ul className="flex flex-col gap-4 mb-8 flex-1"> {/* Feature list */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Core Game Loop</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Placeholder Assets</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> 2 Revisions</li> {/* Feature */}
          </ul> {/* Close list */}
          <Link to="/contact" className="w-full py-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 uppercase tracking-widest font-bold transition-all text-center block mt-auto">Select Tier</Link> {/* Button */}
        </motion.div> {/* Close Tier 1 */}

        <motion.div /* Tier 2 (Highlighted) */
          key="p2" /* Key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Active state */
          transition={{ delay: 0.2 }} /* Delay */
          className="glass-panel p-10 rounded-3xl border border-brand-yellow/50 relative flex flex-col shadow-[0_0_30px_rgba(220,221,0,0.15)] bg-black/90 z-10 lg:-mx-4 w-full h-full" /* Styling */
        > {/* Close motion div */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Most Popular</div> {/* Badge */}
          <h3 className="text-xl font-bold uppercase tracking-widest text-brand-yellow mb-2">Full Production</h3> {/* Tier name */}
          <div className="text-4xl font-bold text-white mb-6">Custom Quote <span className="text-lg text-gray-500 font-normal block mt-1">Fixed Scope</span></div> {/* Price */}
          <ul className="flex flex-col gap-4 mb-8 flex-1"> {/* Feature list */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Complete Architecture</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Custom Pixel Art Assets</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Advanced Animations</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Unlimited Revisions</li> {/* Feature */}
          </ul> {/* Close list */}
          <Link to="/contact" className="w-full py-4 rounded bg-brand-yellow text-black hover:bg-white uppercase tracking-widest font-bold transition-all shadow-lg text-center block mt-auto">Deploy Now</Link> {/* Button */}
        </motion.div> {/* Close Tier 2 */}

        <motion.div /* Tier 3 */
          key="p3" /* Key */
          initial={{ opacity: 0, y: 30 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Active state */
          transition={{ delay: 0.4 }} /* Delay */
          className="glass-panel p-8 rounded-3xl border border-white/5 relative flex flex-col w-full h-full sm:col-span-2 lg:col-span-1" /* Styling */
        > {/* Close motion div */}
          <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-2">Retainer</h3> {/* Tier name */}
          <div className="text-3xl font-bold text-white mb-6">Flexible Retainer <span className="text-lg text-gray-500 font-normal block mt-1">Monthly Billing</span></div> {/* Price */}
          <ul className="flex flex-col gap-4 mb-8 flex-1"> {/* Feature list */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Dedicated Developer</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Priority Support</li> {/* Feature */}
            <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /> Weekly Consultations</li> {/* Feature */}
          </ul> {/* Close list */}
          <Link to="/contact" className="w-full py-4 rounded bg-white/5 hover:bg-white/10 border border-white/10 uppercase tracking-widest font-bold transition-all text-center block mt-auto">Select Tier</Link> {/* Button */}
        </motion.div> {/* Close Tier 3 */}
      </div> {/* Close grid layout */}
    </section>
  ); // Close return
} // Close component
