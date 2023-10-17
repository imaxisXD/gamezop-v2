import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import { Crown, Sparkle, TrendingUp } from "lucide-react";
import Image from "next/image"



export default async function SideNav() {
    const results: GameData = await getData();

    return (
        <nav className="w-80 flex flex-col items-start bg-navbar gap-1 text-fontcolor">
            <Image src='/logo-gamezop.png' alt="gamezop logo" height={150} width={100} className="mx-auto" />
            <div className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-11/12 group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-green-300/10 py-2 hover:border-l-2 hover:border-green-600">
                <TrendingUp className="text-green-400" />
                <h2 className="text-fontcolor group-hover:text-green-400">Trending Games</h2>
            </div>
            <div className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-11/12 group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-yellow-300/10 hover:text-yellow-300 py-2 hover:border-l-2 hover:border-yellow-600">
                <Sparkle className="text-yellow-200" fill="#eab308" />
                <h2 className="text-fontcolor group-hover:text-yellow-400">Newly Added</h2>
            </div>
            <div className="group px-6 transition duration-0 flex items-center justify-start gap-2 cursor-pointer w-11/12 group rounded-md bg-transparent hover:bg-gradient-to-r hover:from-purple-300/10 hover:text-purple-300 py-2 hover:border-l-2 hover:border-purple-600">
                <Crown className="text-purple-200" fill="#9333ea" />
                <h2 className="text-fontcolor group-hover:text-purple-400">Game Of The Week</h2>
            </div>
            <div className="px-6 w-full">
                <h2 className="font-bold text-white leading-loose text-center">CATEGORIES</h2>
                <ul className="flex flex-col items-start gap-1">
                    {Object.entries(results.data.categories).map(([key, category]) => (
                        <li key={key} className="cursor-pointer">{category}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

