import { useDispatch, useSelector } from 'react-redux';
import { addToLocalStorage } from '../methods/localStorageAction';
import { useState, useEffect } from 'react';
import { PayloadInterface } from '../components/elements/elements';

export function BookMark(props: any) {
    const dispatch = useDispatch();

    const addToWatchLater = (item_films: PayloadInterface[], title: string) => {
        if (props.listFilmsLater.length === 0) {
            props.setListFilmsLater((el: PayloadInterface[]) => [
                ...el,
                item_films,
            ]);
            addToLocalStorage('listFilmsLater', [item_films]);
            return;
        }

        const filteredFilmLater = props.listFilmsLater.filter(
            (item: PayloadInterface) => item.title === title
        );
        if (filteredFilmLater.length === 0) {
            props.setListFilmsLater((el: PayloadInterface[]) => [
                ...el,
                item_films,
            ]);
            addToLocalStorage('listFilmsLater', [
                ...props.listFilmsLater,
                item_films,
            ]);
            return;
        } else {
            const filteredFilmLater = props.listFilmsLater.filter(
                (item: PayloadInterface) => item.title !== title
            );
            props.setListFilmsLater(() => filteredFilmLater);

            addToLocalStorage('listFilmsLater', filteredFilmLater);
        }
    };
    const [checked, setChecked] = useState(
        props.listFilmsLater.filter((item: any) => item.title === props.title)
            .length !== 0
            ? true
            : false
    );
    const CheckedAdd = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        dispatch({
            type: 'addWatchLater',
            payload: props.listFilmsLater,
        });
    }, [props.listFilmsLater]);

    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill={checked === true ? '#6100c2' : 'transparent'}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    onClick={() => {
                        if (!props.disabled) {
                            CheckedAdd();
                            return addToWatchLater(props.item, props.title);
                        } else {
                            dispatch({
                                type: 'toggleModalWindow',
                                payload: true,
                            });
                        }
                    }}
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17 3H7a2 2 0 0 0-2 2v15.138a.5.5 0 0 0 .748.434l5.26-3.005a2 2 0 0 1 1.984 0l5.26 3.006a.5.5 0 0 0 .748-.435V5a2 2 0 0 0-2-2zm-8 7h6"
                ></path>
            </g>
        </svg>
    );
}
