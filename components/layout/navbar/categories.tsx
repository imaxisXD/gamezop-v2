import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import Image from "next/image"

export default async function Categories() {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(20000);
    const results: GameData = await getData();
    return (
        <ul className="flex flex-col items-start gap-1">
            {Object.entries(results.data.categories).map(([key, category]) => (
                <li key={key} className="cursor-pointer flex gap-3 items-center w-full rounded-md py-2 px-6 hover:bg-gradient-to-r hover:from-indigo-300/10 hover:text-indigo-300 hover:border-l-2 hover:border-indigo-600">
                    <Image src={`https://static.gamezop.com/comet/assets/img/categories-new/${key}.svg`} height={20} width={20} alt={`${category}`} />
                    {category}
                </li>
            ))}
        </ul>
    )
}

