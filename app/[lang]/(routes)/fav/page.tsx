import FavGames from "@/components/ui/fav-games";
import { Locale } from "@/i18n.config";
import { getLang } from "@/utils/getLang";
export default async function FavPage({ params }: { params: { lang: Locale } }) {
    const Translations = await getLang(params.lang);

    return (

        <section className='flex flex-col justify-center items-start gap-6'>
            <h1 className='text-white text-3xl'><span className='text-blue-400'>{Translations.categories}:</span> {Translations.fav}</h1>
            <FavGames />
        </section >
    )
}