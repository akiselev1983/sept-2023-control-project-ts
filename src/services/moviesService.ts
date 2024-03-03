import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieInfo, IMovieParams} from "../interfaces";

const moviesService = {
    getAllMovies:(page:string):IRes<IMovieParams>=> apiService.get(urls.movies.getAll, {params:{page:`${page}`}}),
    getMovieById:(id:number):IRes<IMovieInfo> => apiService.get(urls.movies.byId(id)),
    getSearchMoviesByName:(page:string,query:string):IRes<IMovieParams> =>apiService.get(urls.movies.searchMovie,
        {params:{page:`${page}`,query:`${query}`}})

}

export {moviesService}