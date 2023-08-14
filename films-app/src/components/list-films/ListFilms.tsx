import './ListFilms.css';
import { FilmCard } from '../film-card/FilmCard.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { applyFilters } from '../../methods/sortFilm.js';
import {
    getFromLocalStorage,
    addToLocalStorage,
} from '../../methods/localStorageAction';
import {
    updateLastPageAction,
    resetNextPageAction,
} from '../redux-reduce/actions';
import { PayloadInterface } from '../elements/elements';

export function ListFilms() {
    const dispatch = useDispatch();
    const [startSlice] = useSelector(
        (state: { currentListFilm: number[] }) => state.currentListFilm
    );
    const [listFilmsLater, setListFilmsLater] = useState(
        getFromLocalStorage('listFilmsLater') || []
    );

    const genreIds = useSelector((state: { genreId: [] }) => state.genreId);
    const valuePopularity = useSelector(
        (state: { valuePopularity: string }) => state.valuePopularity
    );
    const allFilms = useSelector((state: { filteredFilms: [] }) => {
        return state.filteredFilms;
    });
    const currentYear = useSelector(
        (state: { currentYear: number }) => state.currentYear
    );

    const [catalogFilms, setCatalogFilms] = useState<PayloadInterface[]>([]);
    const currentPages = useSelector(
        (state: { currentPage: number }) => state.currentPage
    );

    useEffect(() => {
        const lastIndex = currentPages * 9;
        const firstIndex = lastIndex - 9;

        let sortedFilms = applyFilters(
            [...allFilms],
            valuePopularity,
            genreIds,
            currentYear
        );
        if (!sortedFilms.length) {
            dispatch(resetNextPageAction(1));
        }
        dispatch(
            updateLastPageAction(sortedFilms.length ? sortedFilms.length : 1)
        );
        const sliceFilms = sortedFilms.slice(firstIndex, lastIndex);
        setCatalogFilms(sliceFilms);
    }, [
        genreIds,
        startSlice,
        valuePopularity,
        currentYear,
        allFilms,
        listFilmsLater,
        currentPages,
    ]);
    return (
        <ul className="listFilms-wrapper ">
            {catalogFilms.length === 0
                ? 'Фильмов нет'
                : catalogFilms.map((item: PayloadInterface) => (
                      <li key={item.id} className="film-item">
                          <FilmCard
                              item={item}
                              poster_path={
                                  item.poster_path || item.backdrop_path
                              }
                              title={item.title}
                              voteAverage={item.vote_average}
                          ></FilmCard>
                      </li>
                  ))}
        </ul>
    );
}
