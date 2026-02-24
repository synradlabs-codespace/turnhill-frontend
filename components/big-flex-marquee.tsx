"use client";

import Image from "next/image";

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

export function BigFlexMarquee() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Trusted by Growing & Established Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We work alongside founders and institutions across sectors.
          </p>
        </div>

        {/* Simple Marquee */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll items-center">
            {[...majorClients, ...majorClients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 px-12"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={180}
                  height={80}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}