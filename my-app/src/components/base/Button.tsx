type Props = {
    children: string | JSX.Element,
}

const Button = ({children} : Props) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;