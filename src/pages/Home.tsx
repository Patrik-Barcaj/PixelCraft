import { motion, useScroll, useTransform } from "framer-motion"; // Import motion
import { ArrowRight } from "lucide-react"; // Import icons
import { Link } from "react-router-dom"; // Import link
import logoOnly from "../assets/LogoOnlyNoTypeNoSlogan.png"; // Import logo
import pixelCraftText from "../assets/PixelCraft only.png"; // Import text
import visionsUnleashedText from "../assets/VisionsUnleashed only.png"; // Import slogan
export default function Home() { // Home component
  // Removed scroll-based parallax because it hides content on short viewports when scrolling

  return ( // Return JSX
    <main className="w-full max-w-full flex flex-col items-center justify-center flex-1 text-center relative overflow-x-hidden my-auto px-4 md:max-w-7xl mx-auto"> {/* Main hero container */}
      <motion.div /* Animated wrapper */
        className="flex flex-col items-center justify-center mb-16 relative w-full" /* Centering styling */
      > {/* Close motion div opening */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-brand-yellow/10 blur-[120px] rounded-full z-0 pointer-events-none" /> {/* Ambient glow */}

        <motion.img /* Animated logo */
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }} /* Initial state */
          animate={{ opacity: 1, scale: 1, rotate: 0 }} /* Animate state */
          transition={{ duration: 1.5, type: "spring" }} /* Transition */
          src={logoOnly} /* Logo image source */
          alt="Logo" /* Alt text */
          className="w-auto h-[3em] text-[3rem] md:text-[5rem] lg:text-[7rem] mb-2 md:mb-4 glow-shadow z-10" /* Styling */
        /> {/* Close img */}

        <h1 className="z-10 px-4 mb-2 flex justify-center w-full"> {/* Brand title wrapper */}
          <img src={pixelCraftText} alt="Pixel Craft" className="w-[85%] md:w-full max-w-xl md:max-w-3xl lg:max-w-5xl drop-shadow-2xl" /> {/* Text image */}
        </h1> {/* Close brand title */}

        <motion.div /* Slogan wrapper */
          initial={{ opacity: 0 }} /* Initial state */
          animate={{ opacity: 1 }} /* Animate state */
          transition={{ delay: 1, duration: 1 }} /* Transition */
          className="z-20 mt-0 mb-6 md:mb-10" /* Style wrapper */
        > {/* Close motion div */}
          <img src={visionsUnleashedText} alt="Visions Unleashed" className="h-6 md:h-10 mx-auto drop-shadow-md" /> {/* Slogan image */}
        </motion.div> {/* Close wrapper */}

        <motion.div /* New text content wrapper */
          initial={{ opacity: 0, y: 10 }} /* Initial state */
          animate={{ opacity: 1, y: 0 }} /* Animate state */
          transition={{ delay: 1.2, duration: 0.8 }} /* Transition timing */
          className="z-20 max-w-3xl mx-auto flex flex-col gap-3 px-4" /* Flex layout */
        > {/* Close div opening */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg leading-tight">
            <strong>Premium pixel art and development.<br className="hidden md:block"/> Let's build your dream game.</strong>
          </h2>
          <p className="text-gray-300 font-medium text-base md:text-lg lg:text-xl">
            We specialize in crafting immersive 2D experiences, writing robust game logic, and delivering polished assets. Your vision, our craft.
          </p>
        </motion.div> {/* Close text wrapper */}
      </motion.div> {/* Close animated wrapper */}

      <motion.div /* CTA button group wrapper */
        initial={{ opacity: 0, y: 20 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Animated state */
        transition={{ delay: 1.5, duration: 0.8 }} /* Transition timing */
        className="flex flex-col sm:flex-row gap-6 z-10" /* Flex layout */
      > {/* Close div opening */}
        <Link to="/services" className="px-10 py-5 bg-brand-yellow text-black font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(220,221,0,0.4)]"> {/* Primary CTA */}
          Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> {/* Button text and icon */}
        </Link> {/* Close primary CTA */}
        <Link to="/portfolio" className="px-10 py-5 glass-panel text-white font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-xl"> {/* Secondary CTA */}
          View Portfolio {/* Secondary CTA text */}
        </Link> {/* Close secondary CTA */}
      </motion.div> {/* Close CTA wrapper */}
    </main>
  ); // Close return
} // Close component
