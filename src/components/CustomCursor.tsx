import { motion } from "framer-motion"; // Import motion
import { useEffect, useState } from "react"; // Import hooks

export default function CustomCursor() { // Define component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // State for position
  const [isHovering, setIsHovering] = useState(false); // State for hover

  useEffect(() => { // Hook for side effects
    const updateMousePosition = (e: MouseEvent) => { // Mousemove handler
      setMousePosition({ x: e.clientX, y: e.clientY }); // Update state
    }; // Close handler
    
    const handleMouseOver = (e: MouseEvent) => { // Mouseover handler
      const target = e.target as HTMLElement; // Get target element
      if (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea') || target.closest('.cursor-pointer')) { // Check interactive
        setIsHovering(true); // Enable hover state
      } else { // Otherwise
        setIsHovering(false); // Disable hover state
      } // Close condition
    }; // Close handler

    window.addEventListener("mousemove", updateMousePosition); // Bind mousemove
    window.addEventListener("mouseover", handleMouseOver); // Bind mouseover

    return () => { // Cleanup function
      window.removeEventListener("mousemove", updateMousePosition); // Unbind mousemove
      window.removeEventListener("mouseover", handleMouseOver); // Unbind mouseover
    }; // Close cleanup
  }, []); // Run once on mount

  return ( // Render JSX
    <> {/* Fragment wrapper */}
      <motion.div /* Dot */
        className="fixed top-0 left-0 w-2 h-2 bg-brand-yellow rounded-full pointer-events-none z-[100] hidden lg:block" /* Styling */
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }} /* Follow cursor */
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }} /* Smooth spring */
      /> {/* Close dot */}
      <motion.div /* Ring */
        className="fixed top-0 left-0 w-8 h-8 border border-brand-yellow rounded-full pointer-events-none z-[99] hidden lg:block" /* Styling */
        animate={{ /* Hover animations */
          x: mousePosition.x - 16, /* Center position */
          y: mousePosition.y - 16, /* Center position */
          scale: isHovering ? 1.5 : 1, /* Enlarge on hover */
          backgroundColor: isHovering ? "rgba(220, 221, 0, 0.1)" : "rgba(220, 221, 0, 0)" /* Fill background on hover */
        }} /* Close animate props */
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }} /* Smooth spring */
      /> {/* Close ring */}
    </>
  ); // Close return
} // Close component
