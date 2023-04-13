import styled from "styled-components";

export const GridContainer = styled.div `
    display: grid;
    row-gap: 16px;
    grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
    height: 56px;
    align-items: center;
`