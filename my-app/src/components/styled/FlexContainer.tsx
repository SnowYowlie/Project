import styled from "styled-components";

type FlexContainer = {
    align?: string,
    justify?: string,
    direction?: string,
    gap?: string,
}

export const FlexContainer = styled.div <FlexContainer>`
    display: flex;
    align-items: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'center'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
    height: 100%;
    width: 100%;
`