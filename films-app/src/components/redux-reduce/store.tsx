import { defaultState } from '../elements/elements';
import { createStore } from 'redux';

export const reducer = (
    state = defaultState,
    action: {
        type: string;
        payload: [];
        calculatedNumber: number;
    }
) => {
    switch (action.type) {
        case 'filteredFilms':
            return {
                ...state,
                filteredFilms: action.payload,
                otherPage: Math.ceil(action.payload.length / 9),
            };

        case 'filmDescription':
            return {
                ...state,
                filmDescription: action.payload,
            };
        case 'addFavoriteFilms':
            return {
                ...state,
                favoriteFilms: action.payload,
            };

        case 'addWatchLater':
            return {
                ...state,
                watchLater: action.payload,
            };
        case 'resetFilters': {
            return {
                ...state,
                filteredFilms: defaultState.filteredFilms,
                genreId: defaultState.genreId,
                currentPage: defaultState.currentPage,
                otherPage: defaultState.otherPage,
                valuePopularity: defaultState.valuePopularity,
                currentYear: defaultState.currentYear,
            };
        }
        case 'updateOtherPage':
            return {
                ...state,
                otherPage: Math.ceil(Number(action.payload) / 9),
            };

        case 'nextPage':
            return {
                ...state,
                currentPage: state.currentPage + Number(action.payload),
            };
        case 'resetCurrentPage':
            return {
                ...state,
                currentPage: action.payload,
            };
        case 'prevPage':
            return {
                ...state,
                currentPage: state.currentPage - Number(action.payload),
            };
        case 'addPopularity':
            return {
                ...state,
                valuePopularity: action.payload,
            };
        case 'addGenre':
            return {
                ...state,
                genreId: action.payload,
            };
        case 'deleteGenre':
            return {
                ...state,
                genreId: action.payload,
            };
        case 'addCurrentYear':
            return {
                ...state,
                currentYear: action.payload,
            };
        case 'exampleAuthorization':
            return {
                ...state,
                isAuthorization: action.payload,
            };
        case 'toggleModalWindow':
            return {
                ...state,
                isModalActive: action.payload,
            };

        default:
            return state;
    }
};

export const store = createStore(reducer);
