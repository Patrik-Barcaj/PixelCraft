import { motion } from "framer-motion"; // Import framer motion

export default function InfiniteMarquee() { // Define component
  const technologies = [ // Tech stack list
    "React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite", 
    "Unity", "Unreal Engine", "C#", "C++", "Pixel Art", "Aseprite", "GLSL" // Items
  ]; // Close array

  // Double the array for seamless infinite scroll
  const marqueeContent = [...technologies, ...technologies, ...technologies]; // Create long list

  return ( // Return JSX
    <div className="w-full overflow-hidden bg-brand-yellow/10 border-y border-brand-yellow/20 py-4 relative flex items-center"> {/* Container */}
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" /> {/* Left fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" /> {/* Right fade */}

      <motion.div /* Scrolling wrapper */
        animate={{ x: [0, -1920] }} /* Scroll animation */
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} /* Infinite linear loop */
        className="flex gap-16 whitespace-nowrap" /* Styling */
      > {/* Close motion div */}
        {marqueeContent.map((tech, idx) => ( // Map items
          <span key={idx} className="text-brand-yellow font-bold tracking-widest uppercase text-xl md:text-3xl opacity-50 hover:opacity-100 transition-opacity"> {/* Item styling */}
            {tech} {/* Text */}
          </span>
        ))} {/* Close map */}
      </motion.div> {/* Close motion div */}
    </div>
  ); // Close return
} // Close component
