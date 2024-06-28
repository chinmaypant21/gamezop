import { fetchGames } from "@/lib/api";
import SearchInput from "./Input/SearchInput";

export default async function Search() {
    const games = await fetchGames();

    return (
        <SearchInput gameData={games} />
    )
}