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
        {
            label: "engage",
            href: "/engage",
        },
    ]

    return (
        <header>
            <div className="container flex items-center justify-between max-w-6xl gap-8 px-6 py-4 mx-auto bg-background">
                <Link href={"/"} className="flex items-center gap-3 logo">
                    <Icon className="w-10 h-10 icon" />
                    <div className="title">
                        <span className="font-mono text-sm uppercase tracking-[0.14em] text-foreground">
                            CodeTier Systems
                        </span>
                    </div>
                </Link>
                <nav>
                    {navLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href}>
                                <span>
                                    {link.label}
                                </span>
                            </Link>
                        )
                    })}
                </nav>
                <Button asChild>
                    <Link href={"/engage"}>
                        engage
                    </Link>
                </Button>
            </div>
        </header>
    );
};