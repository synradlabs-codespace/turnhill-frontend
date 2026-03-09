"use client";

import Image from "next/image";

const majorClients = [

  { name: "Chai Churi", logo: "/brands/chai-churi.jpg", alt: "Chai Churi" },
  { name: "Synrad Labs", logo: "/brands/synrad-labs.png", alt: "Synrad Labs" },
  { name: "Kleenjal Sipster", logo: "/brands/kleenjal-sipster.jpg", alt: "Kleenjal Sipster" },
  { name: "Nadar Properties", logo: "/brands/nadar-properties.jpg", alt: "Nadar Properties" },
  { name: "Theka Coffee", logo: "/brands/theka-coffee.jpg", alt: "Theka Coffee" }, { name: "Picos", logo: "/brands/picos.jpg", alt: "Picos" },
  { name: "Sardar Ji", logo: "/brands/sardar-ji.jpg", alt: "Sardar Ji" },
  { name: "Social", logo: "/brands/social.jpg", alt: "Social" },

  { name: "Swastik Finance", logo: "/brands/swastik-finance.jpg", alt: "Theka Coffee" },
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
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll items-center w-max">
            {[...majorClients, ...majorClients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 px-3 w-auto flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={220}
                  height={120}
                  className="h-20 sm:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}