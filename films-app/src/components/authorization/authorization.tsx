import './authorization.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseWindowIcon } from '../../assets/close-window';

export function Authorization() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuthorization = useSelector((state) => state.isAuthorization);

    const isModalActive = useSelector(
        (state: { isModalActive: number }) => state.isModalActive
    );

    function formHandler(e) {
        e.preventDefault();
        if (login === 'Инал' && password === 'Лукьяев') {
            console.log('Добро Пожаловать');
            dispatch({ type: 'exampleAuthorization', payload: true });
            localStorage.setItem('isAuthorization', JSON.stringify(true));
        } else {
            localStorage.setItem('isAuthorization', JSON.stringify(false));
        }
    }

    return (
        <>
            {isAuthorization ? null : (
                <div
                    className={
                        isModalActive
                            ? 'authorization-block active'
                            : 'authorization-block'
                    }
                    onClick={() =>
                        dispatch({
                            type: 'toggleModalWindow',
                            payload: false,
                        })
                    }
                >
                    <div
                        className="wrapper"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-modal_window">
                            <CloseWindowIcon></CloseWindowIcon>
                        </button>

                        <form
                            className="form-authorization"
                            onSubmit={formHandler}
                        >
                            <label htmlFor="">Логин</label>
                            <input
                                type="text"
                                className="login"
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <label htmlFor="">Пороль</label>
                            <input
                                type="text"
                                className="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="comeIn-btn">
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
