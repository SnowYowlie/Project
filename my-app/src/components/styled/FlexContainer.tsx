import styled from "styled-components";
import FlexContainerType from "../../types/FlexContainer";

export const FlexContainer = styled.div <FlexContainerType>`
    display: flex;
    align-items: ${({align}) => align || 'start'};
    justify-content: ${({justify}) => justify || 'start'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
    height: ${({height}) => height || '100%'};
    width: ${({width}) => width || '100%'};
    flex-basis: ${({flexBasis}) => flexBasis || '0'};
    margin: ${({margin}) => margin || '0'};
`