export function BookMark(props) {
    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill={props.color}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    onClick={props.onClick}
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
