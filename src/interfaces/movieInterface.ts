
export interface IMovie {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": number []
    "id": number
    "original_language": string
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "release_date": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}
export interface IMovieParams {
    page: number,
    results: IMovie[]
    total_pages: number,
    total_results: number
}
export interface IGenre{
    id:number,
    name:string
}
export interface IMovieInfo {
    adult: boolean
    backdrop_path: string
    budget: number
    genres: IGenre[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: []
    production_countries: []
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: []
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

