import Genre from "./Genre";
import Platform from "./Platform";
import publisher from "./Publishers";

export default interface Games {
   id: number;
   name: string;
   slug: string;
   genres: Genre[];
   publishers: publisher[]
   description_raw: string;
   background_image: string;
   parent_platforms: { platform: Platform }[];
   metacritic: number;
   rating_top: number;
}
