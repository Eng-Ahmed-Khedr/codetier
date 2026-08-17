"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateFadeUpStagger } from "@/lib/animations";
import Image from "next/image";

const cases = [
    {
        tag: "Case A",
        year: "2026",
        title: "SouqLink",
        subtitle: "High-Throughput Industrial B2B Marketplace",
        description: "A procurement network connecting industrial suppliers to enterprise buyers, handling continuous RFQ traffic with catalogues in the hundreds of thousands of SKUs.",
        technicalChallenge: [
            "Sub - 100ms faceted search across 340k SKUs without a dedicated search cluster.",
            "Multi - tenant pricing visibility enforced at the row level, never in the client.",
            "Optimistic RFQ negotiation threads that survive reconnects and partial failures.",
        ],
        technicalAttributes: [
            {
                dt: "p95 Query",
                dd: "84ms",
            },
            {
                dt: "Catalogue",
                dd: "340k SKU",
            },
            {
                dt: "Uptime",
                dd: "99.98%",
            }
        ],
        link: {
            href: "https://souqlink.systems",
            image: {
                src: "/cases/case1.png",
                alt: "SouqLink industrial marketplace dashboard showing a dense table of supplier requests for quotation"
            },
            imageAttributes: [
                "Next.js",
                "Postgres",
                "RLS",
                "Edge Cache"
            ]
        }
    },
    {
        tag: "Case B",
        year: "2026",
        title: "QuotationApp",
        subtitle: "Native Desktop Invoice Terminal",
        description: "An offline-first quotation and invoicing terminal for field operations. Native binary, local SQLite ledger, deterministic sync when connectivity returns.",
        technicalChallenge: [
            "Full offline authoring with conflict-free reconciliation on reconnect.",
            "Deterministic PDF generation identical across Windows, macOS and Linux.",
            "A 7.4 MB signed installer with auto-update, replacing a 180 MB Electron client",
        ],
        technicalAttributes: [
            {
                dt: "Installer",
                dd: "7.4 MB",
            },
            {
                dt: "Cold Start",
                dd: "310ms",
            },
            {
                dt: "Memory",
                dd: "62 MB",
            }
        ],
        link: {
            href: "app://quotation.terminal",
            image: {
                src: "/cases/case2.png",
                alt: "QuotationApp native desktop invoice terminal window with a line-item editor and totals panel"
            },
            imageAttributes: [
                "Tauri v2",
                "Rust",
                "SQLite",
                "Redux Toolkit"
            ]
        }
    }
];

export default function Architectures() {


    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        animateFadeUpStagger(".caseItem", containerRef.current, 20, 0.1, 0.15);
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            className="border-b border-border bg-background Architectures"
        >
            <div
                className="container mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:py-padding-y-desktop"
            >
                <SectionHeading
                    tag="// Architectures"
                    heading="Proven architectures, running in production."
                    description="Two systems, two entirely different failure domains. Both delivered as sovereign infrastructure the client fully controls."
                />
                <div
                    className="flex flex-col gap-24 mt-20 cases sm:gap-32"
                >
                    {cases.map((caseItem, index) => {
                        const isReversed = index % 2 !== 0;
                        return (
                            <article
                                key={caseItem.tag}
                                className="grid items-center grid-cols-1 gap-12 caseItem case1 lg:grid-cols-2 lg:gap-16">
                                <div
                                    className={`left ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                                    <div className="caseItem flex items-center gap-4 font-mono text-xs text-muted-foreground tracking-[0.2em] uppercase">
                                        <span
                                            className="px-2 py-1 border text-electric-blue border-border"
                                        >
                                            {caseItem.tag}
                                        </span>
                                        <span
                                            className="flex-1 h-px bg-border"
                                        />
                                        <span>
                                            {caseItem.year}
                                        </span>
                                    </div>
                                    <div
                                        className="caseItem"
                                    >
                                        <h3
                                            className="mt-8 text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
                                        >
                                            {caseItem.title}
                                        </h3>
                                        <p
                                            className="mt-2 font-mono text-sm text-muted-foreground"
                                        >
                                            {caseItem.subtitle}
                                        </p>
                                    </div>
                                    <div
                                        className="caseItem"
                                    >
                                        <p
                                            className="mt-6 leading-relaxed text-pretty text-muted-foreground"
                                        >
                                            {caseItem.description}
                                        </p>
                                    </div>
                                    <div
                                        className="caseItem"
                                    >
                                        <p
                                            className="mt-10 font-mono text-[11px] tracking-[0.2em] text-muted-foreground/70 uppercase"
                                        >
                                            Technical challenge
                                        </p>
                                        <ul
                                            className="flex flex-col gap-4 pl-6 mt-5 border-l border-border"
                                        >
                                            {caseItem.technicalChallenge.map((challenge, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="text-sm leading-relaxed text-pretty text-muted-foreground"
                                                    >
                                                        {challenge}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div
                                        className="caseItem"
                                    >
                                        <dl className="grid grid-cols-3 gap-px mt-10 border border-border bg-border">
                                            {caseItem.technicalAttributes.map((technicalAttribute, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="px-4 py-5 bg-background"
                                                    >
                                                        <dt
                                                            className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase"
                                                        >
                                                            {technicalAttribute.dt}
                                                        </dt>
                                                        <dd
                                                            className="mt-2 font-mono text-base text-foreground"
                                                        >
                                                            {technicalAttribute.dd}
                                                        </dd>
                                                    </div>
                                                )
                                            })}
                                        </dl>
                                    </div>
                                </div>
                                <div
                                    className={`relative caseItem right group ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                                >
                                    <div
                                        className="absolute z-0 transition-opacity duration-500 ease-out opacity-0 -inset-px bg-linear-to-tr from-electric-blue via-transparent to-deep-violet group-hover:opacity-100"
                                    />
                                    <div
                                        className="relative z-10 bg-muted"
                                    >
                                        <a
                                            href={caseItem.link.href}
                                            target="_blank"
                                            className="flex items-center justify-between px-4 border-b border-border py-2.5"
                                        >
                                            <span
                                                className="font-mono text-[11px] tracking-wide text-muted-foreground"
                                            >
                                                {caseItem.link.href}
                                            </span>
                                            <ArrowUpRight
                                                className="w-4 h-4 transition-all duration-500 ease-out text-muted-foreground group-hover:text-electric-blue group-hover:translate-x-1 group-hover:-translate-y-1"
                                                strokeWidth={2} />
                                        </a>
                                        <div
                                            className="relative w-full overflow-hidden img bg-muted"
                                        >
                                            <Image
                                                src={caseItem.link.image.src}
                                                alt={caseItem.link.image.alt}
                                                width={1024}
                                                height={1024}
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                loading="lazy"
                                                className="group-hover:scale-[1.04] transition-transform duration-700 ease-out w-full h-auto"

                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="relative z-10 flex flex-wrap gap-2 mt-4"
                                    >
                                        {caseItem.link.imageAttributes.map((attribute, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="border border-border px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                                                >
                                                    {attribute}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};