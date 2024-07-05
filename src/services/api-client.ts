import axios from "axios";

export interface FetchResponse<T> {
   count: number;
   results: T[];
}

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: "6e44533bef0a4d30ac93f47c684b29b5",
   },
});