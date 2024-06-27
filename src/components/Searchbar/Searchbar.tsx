import { fetchGames } from "@/lib/api/fetchGames";
import Searchbar from "./Input/SearchInput";

export default async function SearchBar() {
    console.log('[+] Fetch in search')
    const games = await fetchGames();

    return (
        <Searchbar gameData={games} />
    )
}