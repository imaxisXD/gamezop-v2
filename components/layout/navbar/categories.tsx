'use client'
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Categories() {
    const categories = ['action', "adventure", "sportsRacing", "strategy", "arcade", "puzzleLogic"];
    const segment = useSelectedLayoutSegment();
    console.log(segment);

    return (
        <ul className="flex flex-col items-start gap-1">
            {categories.map((category, index) => (
                <Link key={index}
                    href={`/${category}`}
                    className="cursor-pointer flex gap-3 items-center w-full rounded-md py-2 px-6 hover:bg-gradient-to-r hover:from-indigo-300/10 hover:text-indigo-300 hover:border-l-2 hover:border-indigo-600">
                    <Image src={`https://static.gamezop.com/comet/assets/img/categories-new/${category}.svg`}
                        height={20}
                        width={20}
                        alt={`${category}`} />
                    {category}
                </Link>
            ))}
        </ul>
    );
}
