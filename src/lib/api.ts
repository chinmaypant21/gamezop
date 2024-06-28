export async function fetchGames() : Promise<Game[]> {
    const res = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV', {next: {revalidate: 600}});
    const { games } = await res.json();
    return games;
}