import './FilmCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Star } from '../../assets/star';
import { BookMark } from '../../assets/bookmark';

export function FilmCard({ title, voteAverage, poster_path, item }) {
    const dispatch = useDispatch();
    const isAuthorization = useSelector((state) => state.isAuthorization);
    const filmDescription = () => {
        dispatch({ type: 'filmDescription', payload: item });
    };

    return (
        <div className="film-card">
            <div className="film-card_wrapper">
                <div className="film-card_poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        className="img-card"
                        alt="#"
                    />
                </div>
                <div className="film-card_info">
                    <div className="film-card_rate">
                        Рейтинг: {voteAverage}
                        <div className="film-card_favorite">
                            {isAuthorization ? (
                                <>
                                    <Star item={item} title={title}></Star>
                                    <BookMark
                                        item={item}
                                        title={title}
                                    ></BookMark>
                                </>
                            ) : (
                                <>
                                    <a>
                                        <Star
                                            disabled={true}
                                            color={'transparent'}
                                        ></Star>
                                    </a>
                                    <a>
                                        <BookMark
                                            disabled={true}
                                            color={'transparent'}
                                        ></BookMark>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <h3 className="film-card_title">{title}</h3>
                    <button className="film-card_details">
                        <Link
                            onClick={filmDescription}
                            to="./film-description"
                            title={title}
                            className="film-card_link"
                        >
                            Подробнее
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
