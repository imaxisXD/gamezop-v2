'use client'
import { Crown, Menu, Sparkle, TrendingUp, XCircle } from "lucide-react";
import Image from "next/image"
import Categories from "./categories";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";


export default function SideNav() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    return (
        <nav className="fixed top-0 z-30 lg:z-auto lg:w-72 w-full lg:bottom-0 rounded-r-3xl flex flex-col items-start bg-navbar gap-1 text-fontcolor">
            <Link
                href="/"
                className="group flex w-full items-center justify-normal lg:justify-center gap-x-2.5"
                onClick={close}
            >
                <Image src='/logo-gamezop.png' alt="gamezop logo" height={150} width={100} className="" />
            </Link>
            <button
                type="button"
                className="group absolute right-0 top-4 flex h-14 items-center gap-x-2 px-4 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-medium text-gray-100 group-hover:text-gray-400">
                    Menu
                </div>
                {isOpen ? (
                    <XCircle className="block w-6 text-gray-400" />
                ) : (
                    <Menu className="block w-6 text-gray-400" />
                )}
            </button>
            <div
                className={clsx('overflow-y-auto lg:static w-full lg:block', {
                    'fixed inset-x-0 bottom-0 top-24 mt-px bg-navbar': isOpen,
                    hidden: !isOpen,
                })}
            >
                <Link onClick={close} href="/#game-of-week" className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-full group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-purple-300/10 hover:text-purple-300 py-2 hover:border-l-2 hover:border-purple-600">
                    <Crown className="text-purple-200" fill="#9333ea" />
                    <h2 className="text-fontcolor group-hover:text-purple-400">Game Of the Week</h2>
                </Link>
                <Link onClick={close} href='/#trending' className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-full group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-green-300/10 py-2 hover:border-l-2 hover:border-green-600">
                    <TrendingUp className="text-green-400" />
                    <h2 className="text-fontcolor group-hover:text-green-400">Trending Games</h2>
                </Link>
                <Link onClick={close} href="/#newly-added" className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-full group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-yellow-300/10 hover:text-yellow-300 py-2 hover:border-l-2 hover:border-yellow-600">
                    <Sparkle className="text-yellow-200" fill="#eab308" />
                    <h2 className="text-fontcolor group-hover:text-yellow-400">Newly Added</h2>
                </Link>
                <div className="mx-auto w-full">
                    <h2 className="font-bold text-white/30 leading-loose text-center cursor-default py-4">CATEGORIES</h2>

                    <Categories close={close} />

                </div>
            </div>
        </nav>
    )
}

