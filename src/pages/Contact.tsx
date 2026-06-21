import { useState } from "react"; // Import React state
import { motion, AnimatePresence } from "framer-motion"; // Import framer motion
import { Send, CheckCircle2 } from "lucide-react"; // Import icons

export default function Contact() { // Component definition
  const [isSubmitted, setIsSubmitted] = useState(false); // Form state

  const handleSubmit = (e: React.FormEvent) => { // Submit handler
    e.preventDefault(); // Prevent default
    setIsSubmitted(true); // Set state to true
    (e.target as HTMLFormElement).reset(); // Reset form
  }; // Close handler

  return ( // Return JSX
    <section className="w-full max-w-full px-4 md:max-w-4xl mx-auto flex flex-col justify-center"> {/* Contact container */}
      <AnimatePresence> {/* Animate presence for modal */}
        {isSubmitted && ( /* Conditional rendering */
          <motion.div /* Modal backdrop */
            initial={{ opacity: 0 }} /* Initial state */
            animate={{ opacity: 1 }} /* Animate state */
            exit={{ opacity: 0 }} /* Exit state */
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" /* Backdrop styling */
          > {/* Close backdrop */}
            <motion.div /* Modal content */
              initial={{ scale: 0.9, opacity: 0, y: 20 }} /* Initial state */
              animate={{ scale: 1, opacity: 1, y: 0 }} /* Animate state */
              exit={{ scale: 0.9, opacity: 0, y: 20 }} /* Exit state */
              className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col items-center max-w-md text-center border border-brand-yellow/30 shadow-[0_0_40px_rgba(220,221,0,0.2)] bg-black/95 relative" /* Content styling */
            > {/* Close modal content */}
              <CheckCircle2 className="w-16 h-16 text-brand-yellow mb-6" /> {/* Icon */}
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white mb-2">Message Sent</h3> {/* Title */}
              <p className="text-gray-400 mb-8 font-medium">We've received your mission brief. Our team will analyze the data and contact you shortly.</p> {/* Text */}
              <button onClick={() => setIsSubmitted(false)} className="px-8 py-3 bg-brand-yellow text-black font-bold uppercase tracking-widest rounded hover:bg-white hover:scale-105 transition-all w-full"> {/* Close button */}
                Acknowledge {/* Button text */}
              </button> {/* Close button */}
            </motion.div> {/* Close modal content */}
          </motion.div> /* Close backdrop */
        )} {/* Close conditional */}
      </AnimatePresence> {/* Close AnimatePresence */}

      <motion.div /* Animated header */
        initial={{ opacity: 0, y: -20 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Animate into view */
        className="text-center mb-4 md:mb-8 lg:mb-16" /* Header styling */
      > {/* Close motion div */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest mb-2 md:mb-4 drop-shadow-lg">Initialize Contact</h1> {/* Title */}
        <p className="text-sm md:text-base text-gray-400 px-2 font-medium">Ready to level up your project? Send us your coordinates.</p> {/* Subtitle */}
      </motion.div> {/* Close header */}

      <motion.div /* Animated form wrapper */
        initial={{ opacity: 0, y: 50 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Animate into view */
        className="glass-panel p-8 md:p-10 lg:p-16 rounded-3xl border border-white/10 shadow-2xl bg-black/80" /* Wrapper styling */
      > {/* Close motion div */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}> {/* Form element */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Input grid */}
            <div className="flex flex-col gap-2 group"> {/* Input group */}
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-brand-yellow transition-colors">Player Name</label> {/* Label */}
              <input required type="text" className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-white font-sans" placeholder="Enter your name" /> {/* Input */}
            </div> {/* Close input group */}
            <div className="flex flex-col gap-2 group"> {/* Input group */}
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-brand-yellow transition-colors">Comms Frequency</label> {/* Label */}
              <input required type="email" className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-white font-sans" placeholder="Email address" /> {/* Input */}
            </div> {/* Close input group */}
          </div> {/* Close input grid */}
          <div className="flex flex-col gap-2 group"> {/* Textarea group */}
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-brand-yellow transition-colors">Mission Brief</label> {/* Label */}
            <textarea required rows={3} className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-white font-sans resize-none" placeholder="Describe your project vision..."></textarea> {/* Textarea */}
          </div> {/* Close textarea group */}

          <button type="submit" className="mt-4 px-8 py-5 bg-brand-yellow text-black font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group rounded-lg shadow-[0_0_20px_rgba(220,221,0,0.2)] cursor-pointer"> {/* Submit button */}
            Transmit Data <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> {/* Button text and icon */}
          </button> {/* Close button */}
        </form> {/* Close form element */}
      </motion.div> {/* Close form wrapper */}
    </section>
  ); // Close return
} // Close component
