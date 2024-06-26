import Searchbar from "./Searchbar";

export async function SearchGames() {
    console.log('fetch again')
    const res = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV');
    const { games } = await res.json();
    return (
        <Searchbar gameData={games} />
    )
}