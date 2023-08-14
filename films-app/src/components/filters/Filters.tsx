import './Filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationBlock } from '../pagination-block/pagination-block';
import { Genres } from '../genres/genres.js';
import { FilmsYears } from '../films-years/filmsYears.js';
import { FilmRate } from '../film-rate/film-rate.js';
import { resetCurrentListFilmsAction } from '../redux-reduce/actions';
import { useEffect, useState } from 'react';
import { DefaultStateInterface, selectedByTheUser } from '../elements/elements';

export function Filters() {
    const dispatch = useDispatch();

    const [currentFilter, setCurrentFilter] = useState('');
    const favoriteFilms = useSelector(
        (state: DefaultStateInterface) => state.favoriteFilms
    );
    const isAuthorization = useSelector(
        (state: DefaultStateInterface) => state.isAuthorization
    );
    const watchLater = useSelector(
        (state: DefaultStateInterface) => state.watchLater
    );
    const resetFilters = () => {
        dispatch({ type: 'resetFilters' });
        dispatch(resetCurrentListFilmsAction());
        setCurrentFilter('');
    };

    const addWatchLater = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const inputValue = e.target.value;
        setCurrentFilter(inputValue);
        if (inputValue === 'Смотреть позже') {
            dispatch({
                type: 'filteredFilms',
                payload: watchLater,
            });
        } else if (inputValue === 'Избранное') {
            dispatch({
                type: 'filteredFilms',
                payload: favoriteFilms,
            });
        } else if (inputValue === 'Сбросить фильтр') {
            resetFilters();
        }
    };

    useEffect(() => {
        if (currentFilter === 'Смотреть позже') {
            dispatch({
                type: 'filteredFilms',
                payload: watchLater,
            });
        } else if (currentFilter === 'Избранное') {
            dispatch({
                type: 'filteredFilms',
                payload: favoriteFilms,
            });
        }
    }, [currentFilter, watchLater, favoriteFilms]);
    return (
        <div className="filter-block">
            <form action="" className="form">
                <button
                    className="filter-reset"
                    type="reset"
                    onClick={resetFilters}
                >
                    Сбросить все фильтры
                </button>
                <div className="sort-by">Сортировать по:</div>
                <FilmRate />
                {isAuthorization ? (
                    <span>
                        <div className="sort-by">Избранное:</div>
                        <select
                            name=""
                            id=""
                            onChange={(e) => addWatchLater(e)}
                        >
                            {selectedByTheUser.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </span>
                ) : null}

                <div className="sort-by">Год релиза:</div>
                <FilmsYears />
                <Genres />
            </form>
            <PaginationBlock></PaginationBlock>
        </div>
    );
}
