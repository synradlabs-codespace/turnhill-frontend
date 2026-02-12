"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/number-ticker";

// export function Hero() {
//   return (
//     <section id="home" className="py-10 sm:py-16">
//       <div className="grid items-center gap-10 md:grid-cols-2">
//         <div>
//           <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-left">
//             Advisory for Sustainable Business Growth
//           </h1>
//           <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-prose">
//             Turnhill partners with entrepreneurs and growing enterprises to
//             navigate legal, financial, and strategic complexity with clarity.
//             From structuring and compliance to execution and expansion, we help
//             businesses grow with discipline and confidence.
//           </p>
//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <Button asChild className="rounded-full bg-[#6BAE3A]">
//               <Link href="/contact">Let’s Talk</Link>
//             </Button>
//             <Button
//               variant="outline"
//               className="rounded-full bg-transparent"

//             >
//               <Link href="/testimonials">View Testimonials</Link>

//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           {/* Stat card */}
//           <Card className="col-span-1 rounded-2xl bg-gray-100">
//             <CardContent className="p-5">
//               <div className="text-2xl font-semibold flex items-center">
//                 <NumberTicker value={2000} />+
//               </div>

//               <p className="mt-2 text-xs text-muted-foreground">
//                 Clients advised across compliance, finance, and strategy
//               </p>
//             </CardContent>
//           </Card>

//           {/* Tall image */}
//           <div className="relative h-52 sm:h-64 w-full overflow-hidden rounded-2xl bg-muted">
//             <Image
//               src="https://plus.unsplash.com/premium_photo-1661326274569-dd8337c5e6cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Professional advisory workspace"
//               fill
//               className="object-cover"
//               sizes="(min-width: 768px) 256px, 50vw"
//               priority
//             />
//           </div>

//           {/* Wide image */}
//           <div className="relative col-span-1 h-36 sm:h-40 w-full overflow-hidden rounded-2xl bg-muted">
//             <Image
//               src="https://plus.unsplash.com/premium_photo-1679923906285-386991e8d862?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Strategic planning and execution"
//               fill
//               className="object-cover"
//               sizes="(min-width: 768px) 320px, 50vw"
//             />
//           </div>

//           {/* Green stat card */}
//           <Card className="col-span-1 rounded-2xl bg-[#6BAE3A] text-white">
//             <CardContent className="p-5">
//               <div className="text-2xl font-semibold flex items-center">
//                 <NumberTicker value={94} />%
//               </div>
//               <p className="mt-1 text-xs text-white">
//                 Client retention driven by accountability and trust
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }



export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden py-16 sm:py-24 m-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Corporate advisory background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Left content */}
          <div className="text-white">
            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-left">
              Advisory for Sustainable Business Growth
            </h1>

            <p className="mt-4 text-sm leading-relaxed max-w-prose text-white/85">
              Turnhill partners with entrepreneurs and growing enterprises to
              navigate legal, financial, and strategic complexity with clarity.
              From structuring and compliance to execution and expansion, we help
              businesses grow with discipline and confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full bg-[#6BAE3A] hover:bg-[#5fa02f]">
                <Link href="/contact">Let’s Talk</Link>
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20"
                asChild
              >
                <Link href="/testimonials">View Testimonials</Link>
              </Button>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Stat card */}
            <Card className="col-span-1 rounded-2xl bg-white/90 backdrop-blur">
              <CardContent className="p-5">
                <div className="text-xl sm:text-2xl md:text-4xl font-semibold flex items-center whitespace-nowrap">
                  <NumberTicker value={2000} />+
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Clients advised across compliance, finance, and strategy
                </p>
              </CardContent>
            </Card>

            {/* Tall image */}
            <div className="relative h-52 sm:h-64 w-full overflow-hidden rounded-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661326274569-dd8337c5e6cf?q=80&w=687&auto=format&fit=crop"
                alt="Professional advisory workspace"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 256px, 50vw"
                priority
              />
            </div>

            {/* Wide image */}
            <div className="relative col-span-1 h-36 sm:h-40 w-full overflow-hidden rounded-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1679923906285-386991e8d862?q=80&w=1170&auto=format&fit=crop"
                alt="Strategic planning and execution"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 320px, 50vw"
              />
            </div>

            {/* Green stat card */}
            <Card className="col-span-1 rounded-2xl bg-[#6BAE3A] text-white">
              <CardContent className="p-5">
                <div className="text-xl sm:text-2xl md:text-4xl font-semibold flex items-center whitespace-nowrap">
                  <NumberTicker value={94} />%
                </div>
                <p className="mt-1 text-xs text-white">
                  Client retention driven by accountability and trust
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
