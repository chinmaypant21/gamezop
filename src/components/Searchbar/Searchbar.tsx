import { fetchGames } from "@/lib/api";
import SearchInput from "./Input/SearchInput";

export default async function SearchBar() {
    console.log('[+] Fetch in search')
    const games = await fetchGames();

    return (
        <SearchInput gameData={games} />
    )
}