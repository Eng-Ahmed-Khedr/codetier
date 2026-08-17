"use client";

import { animateFadeUpStagger } from "@/lib/animations";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function SectionHeading({ tag, heading, description }: { tag: string, heading: string, description: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        animateFadeUpStagger(".heading-item", 40, 20, 0.1, 0.15);
    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            className="max-w-2xl"
        >
            <div
                className="heading-item"
            >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    {tag}
                </span>
            </div>
            <div
                className="heading-item"
            >
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
                    {heading}
                </h2>
            </div>
            <div
                className="heading-item"
            >
                <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    )
}