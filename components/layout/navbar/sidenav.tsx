'use client'
import { Crown, Menu, Sparkle, TrendingUp, XCircle } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Categories, NavBarTranslation } from "@/utils/types";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";


export default function SideNav({
    translations, categories, lang
}: {
    translations: NavBarTranslation,
    categories: Categories,
    lang: Locale
}) {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const pathname = usePathname()

    return (
        <nav className="fixed top-0 z-30 lg:z-auto lg:w-72 w-full lg:bottom-0 rounded-r-3xl flex flex-col items-start bg-navbar gap-1 text-fontcolor">
            <Link
                href={`/${lang}`}
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
                <div className="font-medium group-hover:text-white">
                    {translations.menu}
                </div>
                {isOpen ? (
                    <XCircle className="block w-6 text-gray-400 group-hover:text-white" />
                ) : (
                    <Menu className="block w-6 text-gray-400 group-hover:text-white" />
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
                    <h2 className="text-fontcolor group-hover:text-purple-400">{translations.gameofweek}</h2>
                </Link>
                <Link onClick={close} href='/#trending' className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-full group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-green-300/10 py-2 hover:border-l-2 hover:border-green-600">
                    <TrendingUp className="text-green-400" />
                    <h2 className="text-fontcolor group-hover:text-green-400">{translations.trendinggame}</h2>
                </Link>
                <Link onClick={close} href="/#newly-added" className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-full group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-yellow-300/10 hover:text-yellow-300 py-2 hover:border-l-2 hover:border-yellow-600">
                    <Sparkle className="text-yellow-200" fill="#eab308" />
                    <h2 className="text-fontcolor group-hover:text-yellow-400">{translations.newlyadded}</h2>
                </Link>
                <div className="mx-auto w-full">
                    <h2 className="font-bold text-white/30 leading-loose text-center cursor-default py-4">
                        {translations.categories}
                    </h2>
                    <ul className="flex flex-col items-start gap-1">
                        {Object.entries(categories).map(([category, categoryValue]) => (
                            <Link key={category}
                                onClick={close}
                                href={`/${lang}/${category}`}
                                className={`cursor-pointer flex gap-3 items-center w-full rounded-md py-2 px-6 ${pathname === '/' + category ? 'bg-gradient-to-r from-indigo-300/10 text-indigo-300 border-l-2 border-indigo-600' : 'hover:bg-gradient-to-r hover:from-indigo-300/10 hover:text-indigo-300 hover:border-l-2 hover:border-indigo-600'}`}>

                                <Image src={`https://static.gamezop.com/comet/assets/img/categories-new/${category}.svg`}
                                    height={20}
                                    width={20}
                                    alt={`${categoryValue}`} />
                                {categoryValue}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

