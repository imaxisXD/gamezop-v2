import { Crown, Sparkle, TrendingUp } from "lucide-react";
import Image from "next/image"
import Categories from "./categories";
import { Suspense } from "react";
import Loading from "./loading";

export default function SideNav() {
    return (
        <nav className="z-20 lg:bottom-0 w-64 rounded-r-3xl flex flex-col items-start bg-navbar gap-1 text-fontcolor">
            <Image src='/logo-gamezop.png' alt="gamezop logo" height={150} width={100} className="mx-auto pb-10" />
            <a href="#game-of-week" className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-11/12 group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-purple-300/10 hover:text-purple-300 py-2 hover:border-l-2 hover:border-purple-600">
                <Crown className="text-purple-200" fill="#9333ea" />
                <h2 className="text-fontcolor group-hover:text-purple-400">Game Of the Week</h2>
            </a>
            <a href='#trending' className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-11/12 group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-green-300/10 py-2 hover:border-l-2 hover:border-green-600">
                <TrendingUp className="text-green-400" />
                <h2 className="text-fontcolor group-hover:text-green-400">Trending Games</h2>
            </a>
            <a href="#newly-added" className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-11/12 group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-yellow-300/10 hover:text-yellow-300 py-2 hover:border-l-2 hover:border-yellow-600">
                <Sparkle className="text-yellow-200" fill="#eab308" />
                <h2 className="text-fontcolor group-hover:text-yellow-400">Newly Added</h2>
            </a>
            <div className="w-full">
                <h2 className="font-bold text-white leading-loose text-center cursor-default py-4">CATEGORIES</h2>
                <Suspense fallback={<Loading />}>
                    <Categories />
                </Suspense>
            </div>
        </nav>
    )
}

