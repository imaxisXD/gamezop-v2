import { Heart } from "lucide-react"
import Search from "../ui/search"
import { GameData } from "@/utils/types";
import { getData } from "@/utils/fetchdata";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getLang } from "@/utils/getLang";

export default async function SearchBar(
    {
        lang
    }
        :
        {
            lang: Locale
        }
) {
    const results: GameData = await getData(lang);
    const Translations = await getLang(lang);
    const allGames = results.data.games

    return (
        <div className="flex items-center justify-center flex-wrap-reverse sm:justify-between py-4 gap-10 px-2 w-full">
            <Search allGames={allGames} translations={Translations.searchPlaceholde} />
            <Link
                href={`/${lang}/fav`}
                className="relative w-44 py-2 group transition duration-300 hover:bg-opacity-70 hover:border-red-600 
                border border-navbar cursor-pointer flex items-center justify-center gap-2 bg-rose-800/10 hover:bg-rose-800/10 rounded-sm"
            >
                <Heart fill="#fe0001" stroke="#9ba3af" strokeWidth={0.1} className="h-5 w-5" />
                <span className="text-fontcolor group-hover:text-white transition duration-150 text-sm">{Translations.fav}</span>
            </Link>
        </div>
    )
}
