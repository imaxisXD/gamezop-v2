'use client'
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Categories() {

    const categories: { [key: string]: string } = {
        "sportsRacing": "Sports & Racing",
        "strategy": "Strategy",
        "adventure": "Adventure",
        "action": "Action",
        "arcade": "Arcade",
        "puzzleLogic": "Puzzle & Logic"
    }
    const segment = useSelectedLayoutSegment();

    return (
        <ul className="flex flex-col items-start gap-1">
            {Object.keys(categories).map((category) => (
                <Link key={category}
                    href={`${category}`}
                    className="cursor-pointer flex gap-3 items-center w-full rounded-md py-2 px-6 hover:bg-gradient-to-r hover:from-indigo-300/10 hover:text-indigo-300 hover:border-l-2 hover:border-indigo-600">
                    <Image src={`https://static.gamezop.com/comet/assets/img/categories-new/${category}.svg`}
                        height={20}
                        width={20}
                        alt={`${categories[category]}`} />
                    {categories[category]}
                </Link>
            ))}
        </ul>
    );
}
