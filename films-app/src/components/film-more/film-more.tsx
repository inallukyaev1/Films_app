import { useSelector } from 'react-redux';
import { DefaultStateInterface } from '../elements/elements';
import { Header } from '../header/Header';
import { Authorization } from '../authorization/authorization.js';
import './film-more.css';

export function FilmMore() {
    const { title, overview, release_date, poster_path, backdrop_path } =
        useSelector((state: DefaultStateInterface) => state.filmDescription);

    return (
        <>
            <Header></Header>

            <div className="container">
                <div className="film-about">
                    <div className="film-about_wrapper">
                        <Authorization></Authorization>
                        <div className="film-about_poster-block">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                                className="film-about_background"
                            />

                            <div className="film-about_poster">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="film-about_card">
                            <div className="film-about_title">{title}</div>
                            <div className="film-about_descr">{overview}</div>
                            <div className="film-about_date">
                                Дата выхода : {release_date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
