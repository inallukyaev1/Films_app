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
                    <div className="form-wrapper">
                        <button className="close-modal_window">
                            <CloseWindowIcon></CloseWindowIcon>
                        </button>
                        <form
                            className="form"
                            onSubmit={formHandler}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="form_title">Вход</h3>

                            <div className="form_input">
                                <input
                                    placeholder="Логин"
                                    type="text"
                                    className="form_input__login"
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                            <div className="form_input">
                                <input
                                    placeholder="Пороль"
                                    type="password"
                                    className="form_input__password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <button className="form_auth-btn form_auth-btn__small">
                                <a href="#"> Войти</a>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
