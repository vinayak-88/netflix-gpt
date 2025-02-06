import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
    return (
        <div>
        <img src={IMG_CDN + movie.poster_path} alt={movie.title} />
        </div>
    )
}
export default MovieCard;