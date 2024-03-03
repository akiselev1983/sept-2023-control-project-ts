import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import GenresPage from "./pages/GenresPage";
import MovieInfoPage from "./pages/MovieInfoPage";
import SearchMoviesList from "./components/HeaderContainer/Search/SearchMoviesList";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout trigger/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'movies/:movieId', element:<MovieInfoPage/>
            },
            {
                path:'movies/genre/:id', element:<GenresPage/>
            },
            {
                path: 'search/movies', element: <SearchMoviesList/>
            }

        ]
    }
])

export {router}