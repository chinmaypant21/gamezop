export async function fetchGames(){
    console.log('[+] Fetched Data from API')
    const res = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV');
    const { games } = await res.json();
    return games;
}