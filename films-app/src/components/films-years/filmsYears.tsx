import { useDispatch, useSelector } from 'react-redux';
import { addCurrentYearAction } from '../redux-reduce/actions';
import { filmreleaseYear } from '../elements/elements';

import './filmsYears.css';

export function FilmsYears() {
    const dispatch = useDispatch();
    const filterForYears = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const inputValue: string = e.target.value;
        dispatch(addCurrentYearAction(inputValue));
    };

    return (
        <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                filterForYears(e)
            }
            name="filter-films__year"
            id=""
        >
            {filmreleaseYear.map((item) => {
                return (
                    <option key={item} value={item}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
}
