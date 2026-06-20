import { motion } from "framer-motion"; // Import framer motion

export default function TextReveal({ text }: { text: string }) { // Component definition
  const letters = text.split(""); // Split string into letters
  return ( // Return JSX
    <span className="flex"> {/* Container for letters */}
      {letters.map((char, index) => ( /* Map over each letter */
        <motion.span /* Animated span */
          key={index} /* Unique key */
          initial={{ opacity: 0, y: 50, rotateX: -90 }} /* Start state */
          animate={{ opacity: 1, y: 0, rotateX: 0 }} /* End state */
          transition={{ duration: 0.8, delay: index * 0.05, type: "spring", damping: 12 }} /* Animation config */
          className={char === " " ? "w-4 md:w-8" : "inline-block"} /* Handle space width */
        > {/* End opening tag */}
          {char} {/* The character */}
        </motion.span> /* Close span */
      ))} {/* Close map */}
    </span> /* Close container */
  ); // Close return
} // Close component
