// "use client";

// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-auto-scroll";

// // Client data (logos in /public/brands, all .jpeg)
// const majorClients = [
//   { name: "Banjara Bites", logo: "/brands/banjara-bites.jpeg", alt: "Banjara Bites", },
//   { name: "Bun and Caffeine", logo: "/brands/bun-and-caffeine.jpeg", alt: "Bun and Caffeine", },
//   { name: "Chai Churi", logo: "/brands/chai-churi.jpeg", alt: "Chai Churi", },
//   { name: "Clarendon Floors", logo: "/brands/clarendon-floors.jpeg", alt: "Clarendon Floors", },
//   { name: "Dynamic Range Architects", logo: "/brands/dynamic-range-architects.jpeg", alt: "Dynamic Range Architects", },
//   { name: "Hair Raiserz", logo: "/brands/hair-raiserz.jpeg", alt: "Hair Raiserz", },
//   { name: "JK", logo: "/brands/j-k.jpeg", alt: "JK", },
//   { name: "Jai Bhawani Group", logo: "/brands/jai-bhawani-group.jpeg", alt: "Jai Bhawani Group", },
//   { name: "Kleenjal Sipster", logo: "/brands/kleenjal-sipster.jpeg", alt: "Kleenjal Sipster", },
//   { name: "M Tree", logo: "/brands/m-tree.jpeg", alt: "M Tree", },
//   { name: "Mohali Citi Centre", logo: "/brands/mohali-citi-centre.jpeg", alt: "Mohali Citi Centre", },
//   { name: "Nadar Properties", logo: "/brands/nadar-properties.jpeg", alt: "Nadar Properties", },
//   { name: "Old Soul", logo: "/brands/old-soul.jpeg", alt: "Old Soul", },
//   { name: "Picos", logo: "/brands/picos.jpeg", alt: "Picos", },
//   { name: "Pink Sky Productions", logo: "/brands/pink-sky-production.jpeg", alt: "Pink Sky Productions", },
//   { name: "Sardar Ji", logo: "/brands/sardar-ji.jpeg", alt: "Sardar Ji", },
//   { name: "Social", logo: "/brands/social.jpeg", alt: "Social", },
//   { name: "Theka Coffee", logo: "/brands/theka-coffee.jpeg", alt: "Theka Coffee", },
//   { name: "Velvet Vista Accommodations", logo: "/brands/velvet-vista-accomodations.jpeg", alt: "Velvet Vista Accommodations", },
//   { name: "Wellboost Pharma", logo: "/brands/wellboost-pharma.jpeg", alt: "Wellboost Pharma", },
// ] as const;

// export function BigFlexMarquee() {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, dragFree: true, align: "start" },
//     [
//       AutoScroll({
//         playOnInit: true,
//         stopOnInteraction: false,
//         stopOnMouseEnter: true,
//         speed: 2.5,
//         startDelay: 0,
//       }),
//     ]
//   );

//   return (
//     <section
//       aria-label="Our clients"
//       className="py-16 bg-gradient-to-b from-background to-muted/20"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="mb-12 text-center">
//           <h2 className="text-pretty text-3xl font-semibold tracking-tight">
//             Trusted by Growing & Established Businesses
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//             We work alongside founders, brands, and institutions across sectors,
//             supporting growth with structure, compliance, and strategic clarity.
//           </p>
//         </div>

//         <div className="overflow-hidden py-5" ref={emblaRef}>
//           <div className="flex touch-pan-y">
//             {[...majorClients, ...majorClients, ...majorClients, ...majorClients].map(
//               (client, i) => (
//                 <div
//                   key={`${client.name}-${i}`}
//                   className="flex-[0_0_auto] min-w-0 px-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
//                 >
//                   <Image
//                     src={client.logo}
//                     alt={client.alt}
//                     width={200}
//                     height={80}
//                     className="h-20 w-auto object-contain cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-sm text-muted-foreground">
//             Building long-term partnerships across industries and markets
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Client data
const majorClients = [
  { name: "Banjara Bites", logo: "/brands/banjara-bites.jpeg", alt: "Banjara Bites" },
  { name: "Bun and Caffeine", logo: "/brands/bun-and-caffeine.jpeg", alt: "Bun and Caffeine" },
  { name: "Chai Churi", logo: "/brands/chai-churi.jpeg", alt: "Chai Churi" },
  { name: "Synrad Labs", logo: "/brands/synrad-labs.png", alt: "Synrad Labs" },
  { name: "Clarendon Floors", logo: "/brands/clarendon-floors.jpeg", alt: "Clarendon Floors" },
  { name: "Dynamic Range Architects", logo: "/brands/dynamic-range-architects.jpeg", alt: "Dynamic Range Architects" },
  { name: "Hair Raiserz", logo: "/brands/hair-raiserz.jpeg", alt: "Hair Raiserz" },
  { name: "JK", logo: "/brands/j-k.jpeg", alt: "JK" },
  { name: "Jai Bhawani Group", logo: "/brands/jai-bhawani-group.jpeg", alt: "Jai Bhawani Group" },
  { name: "Kleenjal Sipster", logo: "/brands/kleenjal-sipster.jpeg", alt: "Kleenjal Sipster" },
  { name: "M Tree", logo: "/brands/m-tree.jpeg", alt: "M Tree" },
  { name: "Mohali Citi Centre", logo: "/brands/mohali-citi-centre.jpeg", alt: "Mohali Citi Centre" },
  { name: "Nadar Properties", logo: "/brands/nadar-properties.jpeg", alt: "Nadar Properties" },
  { name: "Old Soul", logo: "/brands/old-soul.jpeg", alt: "Old Soul" },
  { name: "Picos", logo: "/brands/picos.jpeg", alt: "Picos" },
  { name: "Pink Sky Productions", logo: "/brands/pink-sky-production.jpeg", alt: "Pink Sky Productions" },
  { name: "Sardar Ji", logo: "/brands/sardar-ji.jpeg", alt: "Sardar Ji" },
  { name: "Social", logo: "/brands/social.jpeg", alt: "Social" },
  { name: "Theka Coffee", logo: "/brands/theka-coffee.jpeg", alt: "Theka Coffee" },
  { name: "Velvet Vista Accommodations", logo: "/brands/velvet-vista-accomodations.jpeg", alt: "Velvet Vista Accommodations" },
  { name: "Wellboost Pharma", logo: "/brands/wellboost-pharma.jpeg", alt: "Wellboost Pharma" },

];

// Container stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Individual logo animation
const logoVariants = {
  hidden: { opacity: 0, y: 30, scale: 1.6 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
    },
  },
};

export function BrandWall() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight">
            Trusted by Growing & Established Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with brands, institutions, and founders across sectors to support growth with structure, compliance, and clarity.
          </p>
        </div>

        {/* Animated brand wall */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {majorClients.map((client) => {
            // small random offsets for organic placement
            const xOffset = Math.floor(Math.random() * 20) - 10;
            const yOffset = Math.floor(Math.random() * 20) - 10;

            return (
              <motion.div
                key={client.name}
                className="flex items-center justify-center"
                variants={logoVariants}
                style={{ transform: `translate(${xOffset}px, ${yOffset}px)` }}
                whileHover={{ scale: 1.3 }}
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="h-16 w-auto object-contain transition-transform duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Building long-term partnerships across industries and markets
          </p>
        </div>
      </div>
    </section>
  );
}
