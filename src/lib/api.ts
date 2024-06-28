export async function fetchGames() : Promise<Game[]> {
    console.log('[+] Fetched Data from API')
    const res = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV', {next: {revalidate: 600}});
    const { games } = await res.json();
    return games;
}