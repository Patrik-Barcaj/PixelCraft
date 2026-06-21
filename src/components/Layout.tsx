import { useState } from "react"; // Import state
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"; // Import motion
import { Outlet, Link, useLocation } from "react-router-dom"; // Import router
import CustomCursor from "./CustomCursor"; // Import cursor
import InfiniteMarquee from "./InfiniteMarquee"; // Import marquee
import { Send, Menu, X, CheckCircle2 } from "lucide-react"; // Import icons
import logoOnly from "../assets/LogoOnlyNoTypeNoSlogan.png"; // Import logo
import pixelCraftText from "../assets/PixelCraft only.png"; // Import text
import fullLogo from "../assets/FullLogoWithEverything.png"; // Import full logo
export default function Layout() { // Layout component
  const { scrollY } = useScroll(); // Scroll hook
  const navBg = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(5, 5, 5, 0.8)"]); // Nav bg transform
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]); // Nav blur transform
  const gridY = useTransform(scrollY, [0, 1000], [0, 200]); // Grid parallax
  const location = useLocation(); // Get current route
  const logoOpacity = useTransform(scrollY, [100, 300], [0, 1]); // Logo opacity on scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isSubscribed, setIsSubscribed] = useState(false); // Newsletter state

  return ( // Return JSX
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-yellow selection:text-black font-sans relative flex flex-col"> {/* Main wrapper */}
      <CustomCursor /> {/* Global cursor */}

      <motion.div /* Animated grid */
        style={{ y: gridY }} /* Parallax */
        className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none fixed" /* Styling */
      /> {/* Close grid */}

      <motion.header /* Header */
        style={{ backgroundColor: navBg, backdropFilter: navBlur, WebkitBackdropFilter: navBlur }} /* Dynamic styles */
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 lg:px-12 lg:py-6 flex justify-between items-center border-b border-white/5 transition-all duration-300" /* Header styling */
      > {/* Close header opening */}
        <Link to="/" className="cursor-pointer group"> {/* Logo link */}
          <motion.div /* Motion wrapper for conditional opacity */
            style={{ opacity: location.pathname === '/' ? logoOpacity : 1 }} /* Opacity style */
            className="flex items-center gap-2 lg:gap-4 shrink-0" /* Flex classes */
          > {/* Close motion div */}
            <img src={logoOnly} alt="Logo" className="h-[26px] md:h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300" /> {/* Logo image resized for mobile */}
            <img src={pixelCraftText} alt="Pixel Craft" className="h-[26px] md:h-10 w-auto object-contain group-hover:brightness-125 transition-all" /> {/* Brand text resized for mobile */}
          </motion.div> {/* Close motion wrapper */}
        </Link> {/* Close logo link */}

        <nav className="hidden lg:flex justify-center items-center gap-6 text-sm font-bold tracking-widest uppercase whitespace-nowrap"> {/* Desktop Navigation */}
          <Link to="/" className={`hover:text-brand-yellow transition-colors ${location.pathname === '/' ? 'text-brand-yellow' : 'text-gray-300'}`}>Home</Link> {/* Home link */}
          <Link to="/about" className={`hover:text-brand-yellow transition-colors ${location.pathname === '/about' ? 'text-brand-yellow' : 'text-gray-300'}`}>About</Link> {/* About link */}
          <Link to="/services" className={`hover:text-brand-yellow transition-colors ${location.pathname === '/services' ? 'text-brand-yellow' : 'text-gray-300'}`}>Services</Link> {/* Services link */}
          <Link to="/pricing" className={`hover:text-brand-yellow transition-colors ${location.pathname === '/pricing' ? 'text-brand-yellow' : 'text-gray-300'}`}>Pricing</Link> {/* Pricing link */}
          <Link to="/portfolio" className={`hover:text-brand-yellow transition-colors ${location.pathname === '/portfolio' ? 'text-brand-yellow' : 'text-gray-300'}`}>Portfolio</Link> {/* Portfolio link */}
          <Link to="/contact" className={`hover:text-black hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 bg-white/5 px-6 py-3 rounded border border-white/10 shadow-lg ${location.pathname === '/contact' ? 'bg-brand-yellow text-black' : ''}`}>Contact</Link> {/* Contact link */}
        </nav> {/* Close navigation */}

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white hover:text-brand-yellow transition-colors z-50"> {/* Hamburger toggle */}
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />} {/* Icon toggle */}
        </button> {/* Close toggle */}
      </motion.header> {/* Close header */}

      <AnimatePresence> {/* Mobile Menu Animation */}
        {isMenuOpen && ( // Render if open
          <motion.div /* Mobile menu overlay */
            initial={{ opacity: 0, y: -20 }} /* Initial state */
            animate={{ opacity: 1, y: 0 }} /* Animate state */
            exit={{ opacity: 0, y: -20 }} /* Exit state */
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col pt-24 pb-12 overflow-y-auto lg:hidden" /* Styling */
          > {/* Close motion div */}
            <div className="flex flex-col items-center justify-center gap-6 my-auto min-h-max"> {/* Inner wrapper */}
              <Link onClick={() => setIsMenuOpen(false)} to="/" className={`text-2xl font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors ${location.pathname === '/' ? 'text-brand-yellow' : 'text-gray-300'}`}>Home</Link> {/* Home link */}
            <Link onClick={() => setIsMenuOpen(false)} to="/about" className={`text-2xl font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors ${location.pathname === '/about' ? 'text-brand-yellow' : 'text-gray-300'}`}>About</Link> {/* About link */}
            <Link onClick={() => setIsMenuOpen(false)} to="/services" className={`text-2xl font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors ${location.pathname === '/services' ? 'text-brand-yellow' : 'text-gray-300'}`}>Services</Link> {/* Services link */}
            <Link onClick={() => setIsMenuOpen(false)} to="/pricing" className={`text-2xl font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors ${location.pathname === '/pricing' ? 'text-brand-yellow' : 'text-gray-300'}`}>Pricing</Link> {/* Pricing link */}
            <Link onClick={() => setIsMenuOpen(false)} to="/portfolio" className={`text-2xl font-bold tracking-widest uppercase hover:text-brand-yellow transition-colors ${location.pathname === '/portfolio' ? 'text-brand-yellow' : 'text-gray-300'}`}>Portfolio</Link> {/* Portfolio link */}
            <Link onClick={() => setIsMenuOpen(false)} to="/contact" className={`text-2xl font-bold tracking-widest uppercase text-black bg-brand-yellow px-10 py-4 rounded shadow-lg`}>Contact</Link> {/* Contact link */}
            </div> {/* Close inner wrapper */}
          </motion.div>
        )} {/* Close conditional */}
      </AnimatePresence> {/* Close AnimatePresence */}

      <div className="relative z-10 flex flex-col items-center justify-center pt-20 md:pt-32 pb-8 md:pb-20 overflow-x-hidden min-h-[100svh] w-full"> {/* Content area */}
        <AnimatePresence mode="wait"> {/* Page transition handler */}
          <Outlet /> {/* Render current route */}
        </AnimatePresence> {/* Close animate presence */}
      </div> {/* Close content area */}

      <div className="z-20 relative"> {/* Marquee wrapper */}
        <InfiniteMarquee /> {/* Scrolling tech stack */}
      </div> {/* Close wrapper */}

      <footer className="w-full pt-16 pb-8 border-t border-white/5 bg-black relative z-30 px-6 md:px-12"> {/* Advanced Footer container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"> {/* Footer grid */}
          <div className="col-span-1 md:col-span-1"> {/* Brand col */}
            <img src={fullLogo} alt="Full Logo" className="h-16 w-auto mb-6" /> {/* Logo image */}
            <p className="text-gray-400 font-medium">Forging digital environments that breathe, react, and leave a lasting impression.</p> {/* Blurb */}
          </div> {/* Close Brand col */}

          <div className="col-span-1 md:col-span-2"> {/* Newsletter col */}
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Initialize Updates</h4> {/* Title */}
            <p className="text-gray-400 font-medium mb-4">Subscribe to our frequency for studio updates and asset drops.</p> {/* Desc */}
            {isSubscribed ? ( // Success message
              <div className="flex items-center gap-3 text-brand-yellow font-bold uppercase tracking-widest bg-brand-yellow/10 p-4 rounded-lg border border-brand-yellow/20">
                <CheckCircle2 className="w-5 h-5" /> Frequency Registered!
              </div>
            ) : ( // Form block
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}> {/* Form */}
                <input required type="email" placeholder="ENTER COORDS (EMAIL)" className="bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-yellow text-white font-sans flex-1" /> {/* Input */}
                <button type="submit" className="px-6 bg-brand-yellow text-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-lg flex items-center justify-center group"> {/* Submit */}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> {/* Icon */}
                </button> {/* Close submit */}
              </form> // Close form
            )} {/* Close conditional */}
          </div> {/* Close Newsletter col */}
        </div> {/* Close footer grid */}

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-xs tracking-widest uppercase font-bold"> {/* Copyright row */}
          <p>&copy; {new Date().getFullYear()} PIXEL CRAFT STUDIO.</p> {/* Copy */}
          <p className="mt-4 md:mt-0 text-brand-yellow/80 hover:text-brand-yellow transition-colors cursor-pointer">MADE BY ElysioTech</p> {/* ElysioTech Credit */}
        </div> {/* Close copyright row */}
      </footer> {/* Close footer */}
    </div> // Close main wrapper
  ); // Close return
} // Close component
