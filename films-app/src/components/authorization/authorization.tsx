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
                    <div className="wrapper">
                        <button className="close-modal_window">
                            <CloseWindowIcon></CloseWindowIcon>
                        </button>
                        <form
                            className="form-authorization"
                            onSubmit={formHandler}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="sign-in_title">Вход</h3>

                            <div className="input-form">
                                <input
                                    placeholder="Логин"
                                    type="text"
                                    className="input-login"
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <input
                                    placeholder="Пороль"
                                    type="password"
                                    className="input-password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <button className="auth-btn auth-btn_small">
                                <a href="#"> Войти</a>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
