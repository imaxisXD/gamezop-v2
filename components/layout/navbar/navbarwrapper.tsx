import { Locale } from '@/i18n.config'
import { getLang } from '@/utils/getLang'
import SideNav from './sidenav'
import { GameData } from '@/utils/types';
import { getData } from '@/utils/fetchdata';

export default async function NavbarWrapper(
    {
        lang
    }
        :
        {
            lang: Locale
        }
) {
    const Translations = await getLang(lang);
    const results: GameData = await getData(lang);
    const categories = results.data.categories

    return (
        <SideNav translations={Translations} categories={categories} lang={lang} />
    )
}

