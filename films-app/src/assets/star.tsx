import { useDispatch } from 'react-redux';
import { addToLocalStorage } from '../methods/localStorageAction';
import { useState, useEffect } from 'react';
import { PayloadInterface } from '../components/elements/elements';

export function Star(props: any) {
    const dispatch = useDispatch();

    const addFavoriteFilms = (item_films: PayloadInterface, title: string) => {
        if (props.favoriteFilms.length === 0) {
            props.setfavoriteFilms((el: []) => [...el, item_films]);
            addToLocalStorage('listFilmFavorite', [item_films]);
            return;
        }
        const filteredFilmLater = props.favoriteFilms.filter(
            (item: PayloadInterface) => item.title === title
        );
        if (filteredFilmLater.length === 0) {
            props.setfavoriteFilms((el: PayloadInterface[]) => {
                return [...el, item_films];
            });
            addToLocalStorage('listFilmFavorite', [
                ...props.favoriteFilms,
                item_films,
            ]);
            return;
        } else {
            const filteredFilmLater = props.favoriteFilms.filter(
                (item: PayloadInterface) => item.title !== title
            );

            props.setfavoriteFilms(() => filteredFilmLater);
            addToLocalStorage('listFilmFavorite', filteredFilmLater);
        }
    };

    const CheckedAddFavorite = () => {
        setfavoriteChecked(!favoriteChecked);
    };

    const [favoriteChecked, setfavoriteChecked] = useState(
        props.favoriteFilms.filter((item: any) => item.title === props.title)
            .length !== 0
            ? true
            : false
    );

    useEffect(() => {
        dispatch({ type: 'addFavoriteFilms', payload: props.favoriteFilms });
    }, [props.favoriteFilms]);

    return (
        <svg
            width="40px"
            height="40px"
            fill={favoriteChecked === true ? '#6100c2' : 'transparent'}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                onClick={() => {
                    if (!props.disabled) {
                        CheckedAddFavorite();
                        return addFavoriteFilms(props.item, props.title);
                    } else {
                        dispatch({
                            type: 'toggleModalWindow',
                            payload: true,
                        });
                    }
                }}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
