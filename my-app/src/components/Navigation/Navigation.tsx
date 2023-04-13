import { useNavigate } from "react-router-dom";
import { FlexContainer } from "../styled/FlexContainer";
import './Navigation.scss';
import styled from "styled-components";

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <FlexContainer className="navigation__container" flexBasis="70px" gap="20px" align="center">
            <ButtonWrapper onClick={() => navigate(-1)}>
                    prev
            </ButtonWrapper>
            <ButtonWrapper onClick={() => navigate(+1)}>
                    next
            </ButtonWrapper>
        </FlexContainer>
    )
}


const ButtonWrapper = styled.button `
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background-color: #ffffff21;
    color: #a09f9f9b;
`
export default Navigation;