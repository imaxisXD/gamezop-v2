import 'server-only';

export async function getData() {
    const response = await fetch('https://dev-meteor.gamezop.com/v1/games/list?id=cfuucl7YgA&lang=en');
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseJson = await response.json()
    return responseJson;
}

