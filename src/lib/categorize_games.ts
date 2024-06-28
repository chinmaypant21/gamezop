import { categories } from "@/data/categories";


export function getGamesByCategory(games: Game[], category_list: string[], count: number) {
    const filteredCategories = categories.filter(category => category_list.includes(category.id));
  
    const categoriesWithGames = filteredCategories.map(category => {
      const gamesForCategory = games.filter(game => 
        game.categories.en.includes(category.value)
      );
  
      const limitedGames = gamesForCategory.slice(0, count);
  
      return {
        id: category.id,
        name: category.name,
        value: category.value,
        games: limitedGames
      };
    });
  
    return categoriesWithGames;
  }