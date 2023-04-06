import styled from "styled-components";
import { PropsWithChildren } from "react";

type Props = {
    clickAction: () => void;
}

const Button = ({children, clickAction} : PropsWithChildren<Props>) => {
    return (
        <ButtonWrapper onClick={clickAction}>
            {children}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button `
    height: 50px;
    width: 150px;
    background-color: #33be5d;
    color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
`
export default Button;