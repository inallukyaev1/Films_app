import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './films-favorite.css';
import { useState } from 'react';

export function FilmsFavorite() {
    const isAuthorization = useSelector((state) => state.isAuthorization);
    const [checked, setChecked] = useState(false);
    const linkValue = isAuthorization ? '#' : './authorization';
    function addFavoriteFilm() {
        setChecked(!checked);
        if (checked) {
            console.log('Добавляй');
        } else {
            console.log('Удаляй');
        }
    }

    /* useEffect(() => console.log('gg'), [checked]); */

    return (
        <Link to={linkValue}>
            <svg
                width="30px"
                height="40px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={addFavoriteFilm}
            >
                <path
                    fill={checked && isAuthorization ? 'green' : 'black'}
                    d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005zM20.779 18.461c-0.188 0.138-0.309 0.358-0.309 0.607 0 0.083 0.014 0.163 0.039 0.238l-0.002-0.005 2.514 7.736-6.581-4.783c-0.122-0.089-0.275-0.143-0.44-0.143s-0.318 0.053-0.443 0.144l0.002-0.002-6.581 4.783 2.514-7.736c0.024-0.070 0.037-0.15 0.037-0.233 0-0.249-0.121-0.469-0.307-0.605l-0.002-0.001-6.58-4.78h8.134c0 0 0.001 0 0.001 0 0.331 0 0.612-0.215 0.71-0.513l0.002-0.005 2.514-7.735 2.514 7.735c0.1 0.303 0.381 0.519 0.713 0.519 0 0 0 0 0 0h8.135z"
                ></path>
            </svg>
        </Link>
    );
}
