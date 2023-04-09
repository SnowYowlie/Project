import { NavLink } from "react-router-dom";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import LinkItemType from "../../types/LinkItemType";

const LinkItem = ({children, url}: PropsWithChildren<LinkItemType>) => {
    return (
        <LinkWrapper>
            <NavLink to={url}>
                {children}
            </NavLink>
        </LinkWrapper>
    )
}

const LinkWrapper = styled.div `
    font-size: 1rem;
`
export default LinkItem;