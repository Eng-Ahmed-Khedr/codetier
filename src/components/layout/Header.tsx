"use client";

import Link from "next/link";
import Icon from "../ui/icon";
import { Button } from "../ui/button";

export default function Header() {

    const navLinks = [
        {
            label: "home",
            href: "/",
        },
        {
            label: "stack",
            href: '/stack',
        },
        {
            label: "architectures",
            href: "/architectures",
        },
        {
            label: "protocol",
            href: "/protocol",
        },
        {
            label: "principal",
            href: "/principal",
        },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
            <div className="container flex items-center justify-between max-w-6xl gap-8 px-6 py-4 mx-auto">
                <Link href={"/"} className="flex items-center gap-3 logo">
                    <Icon className="w-10 h-10 icon" />
                    <div className="title">
                        <span className="font-mono text-sm uppercase tracking-[0.14em] text-foreground">
                            CodeTier Systems
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:items-center md:gap-8 md:flex">
                    {navLinks.map((link, index) => {
                        return (
                            <Link
                                className="uppercase font-mono text-xs tracking-[0.16rem] text-muted-foreground transition-all duration-500 ease-in-out hover:text-foreground"
                                key={index}
                                href={link.href}>
                                <span>
                                    {link.label}
                                </span>
                            </Link>
                        )
                    })}
                </nav>
                <Button
                    className="px-4 py-2 font-mono text-xs uppercase transition-all duration-500 ease-in-out bg-transparent border rounded-none text-foreground border-border hover:border-electric-blue hover:bg-transparent tracking-[0.16em]"
                    asChild>
                    <Link href={"/engage"}>
                        engage
                    </Link>
                </Button>
            </div>
        </header>
    );
};