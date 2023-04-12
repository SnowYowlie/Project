import styled from "styled-components";
import FlexContainerType from "../../types/FlexContainer";

export const FlexContainer = styled.div <FlexContainerType>`
    display: flex;
    align-items: ${({align}) => align || 'start'};
    justify-content: ${({justify}) => justify || 'start'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
    height: ${({height}) => height || 'auto'};
    width: ${({width}) => width || 'auto'};
    flex-basis: ${({flexBasis}) => flexBasis || 'auto'};
    margin: ${({margin}) => margin || '0'};
    padding: ${({padding}) => padding || '0'};;
    flex-grow: ${({flex_grow}) => flex_grow || '0'};
`