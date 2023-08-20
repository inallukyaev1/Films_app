import { useDispatch, useSelector } from 'react-redux';

export function CloseWindowIcon() {
    const dispatch = useDispatch();
    return (
        <svg
            className="close-modal-window"
            width="40px"
            height="40px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            transform="rotate(180)"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {' '}
                <circle
                    cursor={'pointer'}
                    onClick={() =>
                        dispatch({
                            type: 'toggleModalWindow',
                            payload: false,
                        })
                    }
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1C274C"
                    strokeWidth="0.8399999999999999"
                ></circle>{' '}
                <path
                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                    stroke="#1C274C"
                    strokeWidth="0.8399999999999999"
                    strokeLinecap="round"
                ></path>{' '}
            </g>
        </svg>
    );
}
