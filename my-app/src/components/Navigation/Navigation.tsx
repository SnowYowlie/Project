import { useNavigate } from "react-router-dom";
import { FlexContainer } from "../styled/FlexContainer";
import './Navigation.scss';

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <FlexContainer className="navigation__container" flexBasis="70px">
            <button onClick={() => navigate(-1)}>
                prev
            </button>
            <button onClick={() => navigate(+1)}>
                next
            </button>
        </FlexContainer>
    )
}

export default Navigation;