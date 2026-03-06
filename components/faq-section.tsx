"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqItem = { q: string; a: string }

function FaqItem({ f, i }: { f: FaqItem; i: number }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-lg border bg-card overflow-hidden">
            <button
                onClick={() => setOpen((p) => !p)}
                className="w-full flex items-center justify-between p-4 font-medium text-left cursor-pointer"
            >
                <span>
                    <span className="mr-2 text-[#6BAE3A]">Q{i + 1}.</span> {f.q}
                </span>
                <ChevronDown
                    size={18}
                    className={`ml-4 shrink-0 text-[#6BAE3A] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</p>
                </div>
            </div>
        </div>
    )
}

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
    return (
        <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
                <FaqItem key={i} f={f} i={i} />
            ))}
        </div>
    )
}