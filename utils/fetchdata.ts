import { Locale } from '@/i18n.config';
import 'server-only';
import { GameData } from './types';

export async function getData(lang: Locale) {
    const response = await fetch(`https://dev-meteor.gamezop.com/v1/games/list?id=cfuucl7YgA&lang=${lang}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseJson: GameData = await response.json()
    console.log(responseJson.data.categories);

    return responseJson;
}

