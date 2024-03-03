import {IGenres, IRes} from "../types";
import {IGenre, IMovieParams} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genresService = {
    getAllGenres:():IRes<IGenres<IGenre[]>> => apiService.get(urls.genres.getAll),
    getAllByGenreId:(page:number,genreId:number):IRes<IMovieParams>=>apiService.get(urls.genres.getMoviesByGenreId(genreId),{params:{page:`${page}`}})
}
export {genresService}