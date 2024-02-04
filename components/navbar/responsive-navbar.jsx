"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/utils/navigation-links";
import ItemCart from "../cart/item-cart";

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div
                className={cn(
                    "fixed inset-0 bg-black bg-opacity-60 z-40",
                    isMenuOpen ? "block" : "hidden"
                )}
                onClick={onMenuClick}
            ></div>
            <div className="h-[15vh] flex justify-between items-center py-8 border-b max-w-screen-lg mx-2 sm:mx-8 lg:mx-auto">
                <ul className="flex items-center gap-2 sm:gap-4">
                    {/* Hamburger Icon for mobile view */}
                    <div className="md:hidden mt-3">
                        <button onClick={onMenuClick}>
                            <Menu className="h-6 w-6 text-grayishblue" />
                        </button>
                    </div>
                    {/* Sidebar open for mobile view */}
                    <div
                        className={cn(
                            "fixed inset-y-0 left-0 bg-white w-2/3 md:w-1/2 lg:w-1/3 z-50 transform",
                            isMenuOpen ? "translate-x-0" : "-translate-x-full",
                            "transition-transform duration-300 ease-in-out overflow-y-auto"
                        )}
                    >
                        <div className="flex items-start px-8 py-8">
                            <button onClick={onMenuClick}>
                                <X className="h-6 w-6 text-grayishblue" />
                            </button>
                        </div>
                        <ul className="flex flex-col items-start px-8 gap-6">
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        className="font-bold hover:border-b-2 border-realorange duration-200 ease-out"
                                        href={link.href}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image
                        src="/images/logo.svg"
                        width={150}
                        height={150}
                        alt="Sneaker Logo"
                    />
                    {/* Navigation Links for desktop view */}
                    <div className="hidden md:flex items-center gap-6">
                        {navigationLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    className="text-grayishblue hover:border-b-2 border-realorange duration-200 ease-out"
                                    href={link.href}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
                <section className="flex items-center gap-4 sm:gap-8">
                    <ItemCart></ItemCart>
                    <Image
                        src="/images/image-avatar.png"
                        width={40}
                        height={40}
                        alt="User Avatar"
                        className="rounded-full hover:border-2 border-realorange cursor-pointer duration-200 ease-out"
                    />
                </section>
            </div>
        </div>
    );
}
