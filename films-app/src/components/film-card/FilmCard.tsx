import './FilmCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { getFromLocalStorage } from '../../methods/localStorageAction';
import { Star } from '../../assets/star';
import { BookMark } from '../../assets/bookmark';

export function FilmCard({
    favoriteFilms,
    listFilmsLater,
    title,
    voteAverage,
    poster_path,
    item,
    addToWatchLater,
    addFavoriteFilms,
}) {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(
        listFilmsLater.filter((item) => item.title === title).length !== 0
            ? true
            : false
    );
    const [favoriteChecked, setfavoriteChecked] = useState(
        favoriteFilms.filter((item) => item.title === title).length !== 0
            ? true
            : false
    );
    const isAuthorization = useSelector((state) => state.isAuthorization);

    function CheckedAdd() {
        setChecked(!checked);
    }
    function CheckedAddFavorite() {
        setfavoriteChecked(!favoriteChecked);
    }

    function filmDescription() {
        dispatch({ type: 'filmDescription', payload: item });
    }

    return (
        <div className="film-card">
            <div className="film-card_wrapper">
                <div className="film-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        className="img-card"
                        alt="#"
                    />
                </div>
                <div className="film-info">
                    <div className="rate">
                        <span className="film-rate">
                            Рейтинг: {voteAverage}
                        </span>

                        {isAuthorization ? (
                            <div className="films-favorite">
                                <Star
                                    color={
                                        favoriteChecked === true
                                            ? '#6100c2'
                                            : 'transparent'
                                    }
                                    onClick={() => {
                                        CheckedAddFavorite();
                                        return addFavoriteFilms(item, title);
                                    }}
                                ></Star>
                                <BookMark
                                    color={
                                        checked === true
                                            ? 'yellow'
                                            : 'transparent'
                                    }
                                    onClick={() => {
                                        CheckedAdd();
                                        return addToWatchLater(item, title);
                                    }}
                                ></BookMark>
                            </div>
                        ) : (
                            <div className="films-favorite">
                                <Link to="./authorization">
                                    <Star
                                        onClick={() => {
                                            CheckedAddFavorite();
                                            return addFavoriteFilms(
                                                item,
                                                title
                                            );
                                        }}
                                        color={
                                            favoriteChecked === true
                                                ? '#6100c2'
                                                : 'transparent'
                                        }
                                    ></Star>
                                </Link>
                                <Link to="./authorization">
                                    <BookMark
                                        color={
                                            checked === true
                                                ? 'yellow'
                                                : 'transparent'
                                        }
                                        onClick={() => {
                                            CheckedAdd();
                                            return addToWatchLater(item, title);
                                        }}
                                    ></BookMark>
                                </Link>
                            </div>
                        )}
                    </div>
                    <h3 className="film-title">{title}</h3>
                    <div className="film-details">
                        <Link
                            onClick={filmDescription}
                            to="./film-description"
                            title={title}
                            className="film-more-link"
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
