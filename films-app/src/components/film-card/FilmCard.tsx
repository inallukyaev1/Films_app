import './FilmCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
                        <div className="films-favorite">
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
                                    <Link to="./authorization">
                                        <Star color={'transparent'}></Star>
                                    </Link>
                                    <Link to="./authorization">
                                        <BookMark
                                            color={'transparent'}
                                        ></BookMark>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    <h3 className="film-title">{title}</h3>
                    <button className="film-details">
                        <Link
                            onClick={filmDescription}
                            to="./film-description"
                            title={title}
                            className="film-more-link"
                        >
                            Подробнее
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
