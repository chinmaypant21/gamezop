const MAX_RESULTS = 25;

type Callback = (games: Game[]) => void;

export default function filterSearch(value: string, gameData: Game[], callback: Callback) {

    const filtered = gameData.filter((game: any) => {
        const query = value.toLowerCase();

        return (
            game.name.en.toLowerCase().includes(query) ||
            game.description.en.toLowerCase().includes(query) ||
            game.tags.en.some((tag: any) => tag.toLowerCase().includes(query))
        )
    });

    callback(filtered.slice(0,MAX_RESULTS));
}