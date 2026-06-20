import { useState } from "react"; // Import React state
import { motion } from "framer-motion"; // Import framer motion
import { Send, CheckCircle2 } from "lucide-react"; // Import icons

export default function Contact() { // Component definition
  const [isSubmitted, setIsSubmitted] = useState(false); // Form state

  const handleSubmit = (e: React.FormEvent) => { // Submit handler
    e.preventDefault(); // Prevent default
    setIsSubmitted(true); // Set state to true
  }; // Close handler

  return ( // Return JSX
    <section className="w-full max-w-4xl mx-auto px-6 pt-2 md:pt-10"> {/* Contact container */}
      <motion.div /* Animated form wrapper */
        initial={{ opacity: 0, y: 50 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Animate into view */
        className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 shadow-2xl bg-black/80" /* Wrapper styling */
      > {/* Close motion div */}
        <div className="text-center mb-12"> {/* Text center */}
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">Initialize Contact</h1> {/* Title */}
          <p className="text-gray-400">Ready to level up your project? Send us your coordinates.</p> {/* Subtitle */}
        </div> {/* Close text center */}

        {isSubmitted ? ( // Success message
          <motion.div /* Animated success wrapper */
            initial={{ opacity: 0, scale: 0.9 }} /* Initial state */
            animate={{ opacity: 1, scale: 1 }} /* Animate state */
            className="flex flex-col items-center justify-center py-12" /* Flex styles */
          > {/* Close motion div */}
            <CheckCircle2 className="w-20 h-20 text-brand-yellow mb-6" /> {/* Success icon */}
            <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Data Transmitted!</h2> {/* Success title */}
            <p className="text-gray-400 text-center">Your mission brief has been received. Our team will contact you shortly.</p> {/* Success text */}
          </motion.div> // Close success wrapper
        ) : ( // Form block
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
          </form> // Close form block
        )} {/* Close conditional */}
      </motion.div> {/* Close form wrapper */}
    </section>
  ); // Close return
} // Close component
