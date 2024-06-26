import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
   id: number;
   name: string;
   slug: string;
}

export interface Games {
   id: number;
   name: string;
   background_image: string;
   parent_platforms: { platform: Platform }[];
   metacritic: number;
   rating_top: number;
}

const useGames = (
   gameQeury: GameQuery
) =>
   useData<Games>("./games", {
         params: { 
            genres: gameQeury.genre?.id, 
            platforms: gameQeury.platform?.id,
            ordering: gameQeury.sortOrder,
            search: gameQeury.searchText
         }},
      [gameQeury ]);


      export default useGames;
