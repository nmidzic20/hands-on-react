import styled from "styled-components";
import { colors, breakpoints } from "./theme"
import {ReactComponent as CancelIcon } from "../../assets/images/icon-cancel.svg"

export const Button = styled.button`
    display: inline-block;
    padding: 12px 20px;
    border-radius: 4px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    transition: background-color 0.3s ease-out;
    outline: none;
    border: none;

    &_secondary {
        padding: 16px 20px;
    }
        
    &:hover {
        background-color: ${colors.primaryDark};
        cursor: pointer;
    }
`

export const Grid = styled.div`
    display: grid;
    gap: 32px;

    @media screen and (${breakpoints.tabletSmall}) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media screen and (${breakpoints.tablet}) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media screen and (${breakpoints.desktopLarge}) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const CancelImg = styled(CancelIcon)`
    display: block;
    width: 32px;
    height: 32px;
`