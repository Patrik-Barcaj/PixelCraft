import React, { useRef, useEffect } from "react"; // Import react hooks

interface MobileCarouselProps { // Define props
  items: React.ReactNode[]; // Array of components to render
} // Close props

export default function MobileCarousel({ items }: MobileCarouselProps) { // Define component
  const scrollRef = useRef<HTMLDivElement>(null); // Create ref for scroll container
  const itemsLength = items.length; // Get number of unique items
  const displayItems = [...items, ...items, ...items]; // Triple array for infinite scroll illusion

  useEffect(() => { // Handle initial scroll
    if (scrollRef.current) { // Check if ref exists
      const container = scrollRef.current; // Get container
      const middleItemIndex = itemsLength + Math.floor(itemsLength / 2); // Calculate middle index of the middle block
      
      setTimeout(() => { // Wait for DOM to paint dimensions
        const itemElement = container.children[middleItemIndex] as HTMLElement; // Get middle element
        if (itemElement) { // If it exists
          // Scroll container to perfectly center the middle item
          container.scrollLeft = itemElement.offsetLeft - container.offsetWidth / 2 + itemElement.offsetWidth / 2; // Center math
        } // Close if
      }, 100); // Small timeout
    } // Close if
  }, [itemsLength]); // Run on mount

  const handleScroll = () => { // Handle infinite scroll reset
    const container = scrollRef.current; // Get container
    if (!container) return; // Guard clause
    
    const maxScroll = container.scrollWidth - container.clientWidth; // Max scrollable width
    const oneBlockWidth = container.scrollWidth / 3; // Width of one complete set of items
    
    // If user scrolls too far left into the first block
    if (container.scrollLeft <= 5) { // Threshold
      container.scrollLeft += oneBlockWidth; // Silently jump right by one block
    } 
    // If user scrolls too far right into the third block
    else if (container.scrollLeft >= maxScroll - 5) { // Threshold
      container.scrollLeft -= oneBlockWidth; // Silently jump left by one block
    } // Close else if
  }; // Close handler

  return ( // Return JSX
    <> {/* Fragment */}
      <div /* Mobile Carousel Container */
        ref={scrollRef} /* Attach ref */
        onScroll={handleScroll} /* Attach scroll listener */
        className="flex md:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-[7.5vw] py-4" /* Tailwind classes */
      > {/* Close opening tag */}
        {displayItems.map((item, idx) => ( // Map over tripled items
          <div key={idx} className="snap-center shrink-0 w-[85vw] flex justify-center h-full"> {/* Item wrapper */}
            {item} {/* Render item */}
          </div>
        ))} {/* Close map */}
      </div> {/* Close container */}

      <div className="hidden md:contents"> {/* Desktop fallback container */}
        {items} {/* Render items normally without carousel wrappers on desktop */}
      </div> {/* Close desktop fallback */}
    </>
  ); // Close return
} // Close component
