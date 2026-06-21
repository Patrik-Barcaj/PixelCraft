import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"; // Import framer motion
import React from "react"; // Import react
import imgCyberpunk from "../assets/portfolio_cyberpunk.png"; // Import cyberpunk image
import imgRpg from "../assets/portfolio_rpg.png"; // Import rpg image
import imgShmup from "../assets/portfolio_shmup.png"; // Import shmup image
import imgGothic from "../assets/portfolio_gothic.png"; // Import gothic image
import imgFarming from "../assets/portfolio_farming.png"; // Import farming image
import imgFighting from "../assets/portfolio_fighting.png"; // Import fighting image
import imgScifi from "../assets/portfolio_scifi.png"; // Import scifi image
import imgPlatformer from "../assets/portfolio_platformer.png"; // Import platformer image
import imgCardgame from "../assets/portfolio_cardgame.png"; // Import card game image

// 3D Tilt Card Component
function TiltCard({ children, delay }: { children: React.ReactNode, delay: number }) { // Define card
  const x = useMotionValue(0); // Mouse X
  const y = useMotionValue(0); // Mouse Y
  
  const mouseXSpring = useSpring(x); // Smooth X
  const mouseYSpring = useSpring(y); // Smooth Y
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]); // Tilt X
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]); // Tilt Y

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => { // Handle move
    const rect = e.currentTarget.getBoundingClientRect(); // Get card bounds
    const width = rect.width; // Card width
    const height = rect.height; // Card height
    const mouseX = e.clientX - rect.left; // Mouse X relative
    const mouseY = e.clientY - rect.top; // Mouse Y relative
    const xPct = mouseX / width - 0.5; // X percentage
    const yPct = mouseY / height - 0.5; // Y percentage
    x.set(xPct); // Update motion value
    y.set(yPct); // Update motion value
  }; // Close handler

  const handleMouseLeave = () => { // Handle leave
    x.set(0); // Reset X
    y.set(0); // Reset Y
  }; // Close handler

  return ( // Return JSX
    <motion.div /* Animated card wrapper */
      initial={{ opacity: 0, y: 50 }} /* Initial state */
      animate={{ opacity: 1, y: 0 }} /* Active state */
      transition={{ delay, duration: 0.5 }} /* Transition */
      onMouseMove={handleMouseMove} /* Bind mouse move */
      onMouseLeave={handleMouseLeave} /* Bind mouse leave */
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} /* Apply 3D transforms */
      className="relative rounded-2xl overflow-hidden glass-panel group cursor-pointer shadow-2xl border border-white/10 w-full" /* Styling */
    > {/* Close motion div */}
      {children} {/* Render inner content */}
    </motion.div>
  ); // Close return
} // Close component

export default function Portfolio() { // Portfolio page
  const projects = [ // Projects array
    { id: 1, title: "Unannounced Cyberpunk Title", tag: "Confidential Project", desc: "Full 2D environment design and character sprite animation under strict NDA.", img: imgCyberpunk }, // Project 1
    { id: 2, title: "Retro RPG Asset Pack", tag: "Client Work", desc: "Custom UI asset creation matching vintage RPG aesthetics for an indie studio.", img: imgRpg }, // Project 2
    { id: 3, title: "Next-Gen Shmup", tag: "Co-Development", desc: "High-octane particle effects and seamless background scrolling assistance.", img: imgShmup }, // Project 3
    { id: 4, title: "Gothic Metroidvania", tag: "Lighting Pass", desc: "Intricate level design and moody lighting pass for an upcoming castle exploration game.", img: imgGothic }, // Project 4
    { id: 5, title: "Cozy Farming Sim", tag: "Animation Support", desc: "Vibrant color palettes and smooth isometric tile animations.", img: imgFarming }, // Project 5
    { id: 6, title: "Unrevealed Fighting Game", tag: "Combat Mechanics", desc: "Fluid frame-by-frame combat animation and hit-stop effects.", img: imgFighting }, // Project 6
    { id: 7, title: "Sci-Fi Strategy UI", tag: "Interface Design", desc: "Complex UI layouts and detailed structural sprite work.", img: imgScifi }, // Project 7
    { id: 8, title: "Platformer Prototype", tag: "Game Jam to Full Release", desc: "Squishy physics simulation and reactive environmental assets.", img: imgPlatformer }, // Project 8
    { id: 9, title: "Fantasy Card Game", tag: "Card Illustrations", desc: "High-fantasy digital paintings and custom borders for a popular TCG.", img: imgCardgame } // Project 9
  ]; // Close array

  return ( // Return JSX
    <section className="w-full max-w-full px-4 md:max-w-7xl mx-auto flex flex-col justify-center" style={{ perspective: 1000 }}> {/* Portfolio container */}
      <motion.div /* Animated header */
        initial={{ opacity: 0, y: -20 }} /* Initial state */
        animate={{ opacity: 1, y: 0 }} /* Active state */
        className="text-center mb-8 md:mb-12 lg:mb-16" /* Styling */
      > {/* Close motion div */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-4 md:mb-6 drop-shadow-lg">Our Masterpieces</h1> {/* Title */}
        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full" /> {/* Decorative line */}
      </motion.div> {/* Close motion div */}

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full"> {/* Grid layout */}
        {projects.map((proj, idx) => ( // Map over projects to generate cards
          <TiltCard key={proj.id} delay={idx * 0.1}> {/* Render TiltCard */}
            <div className="aspect-[16/9] w-full overflow-hidden bg-black relative" style={{ transform: "translateZ(50px)" }}> {/* Image container with 3D pop */}
              <div className="absolute inset-0 bg-brand-yellow/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" /> {/* Overlay */}
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" /> {/* Image */}
            </div> {/* Close container */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-20" /> {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-30 flex flex-col pointer-events-none" style={{ transform: "translateZ(80px)" }}> {/* Text container */}
              <div className="transform transition-transform duration-300 group-hover:-translate-y-16"> {/* Shifts up on hover */}
                <span className="block text-brand-yellow font-bold tracking-widest text-xs md:text-sm mb-2 uppercase drop-shadow-md">{proj.tag}</span> {/* Tag */}
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{proj.title}</h3> {/* Title */}
              </div> {/* Close title container */}
              
              <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 right-8 md:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"> {/* Description container */}
                <p className="text-gray-300 text-sm md:text-base max-w-md line-clamp-2">{proj.desc}</p> {/* Description */}
              </div> {/* Close description container */}
            </div> {/* Close text container */}
          </TiltCard>
        ))} {/* Close Map */}
      </div> {/* Close grid layout */}
    </section>
  ); // Close return
} // Close component
