import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (movies === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="px-6">
            <h1 className="text-2xl py-4 text-white">{title}</h1>
                <div className="flex overflow-x-scroll scrollbar-hide">
                    {movies?.map((movie) => (
                        <div key={movie.id} className="w-44 flex-shrink-0 pr-4">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MovieList;