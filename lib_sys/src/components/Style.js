import styled from 'styled-components';
import { rgba } from 'polished';

//import background from './../assets/bg.png'

//React router
import { Link } from 'react-router-dom';

export const colors = {
    backgr: "#FFFFDE",
    backgr1: "#F6C3D5",
    primary: "#fff",
    primary2: "#66BFBF",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    backco2 : "#FFC2D1",
    grayCo : "#6C757D"

}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    //background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    background-attachment: fixed;

`;

//Input
export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-int-out 0.3s;

    ${(props) => props.invali && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

//Label
export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`; 

//FormArea
export const StyledFormArea = styled.div`
    background-color: ${colors.light1};
    text-align: center;
    padding: 45px 55px;
`;


export const StyledUserButton = styled.button`
    
    background-image: linear-gradient(#0dccea, #0d70ea);
    border: 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: Montserrat,sans-serif;
    width: 100%;
    font-size: 1.9em;
    margin:25px 0;
    padding: 10px 15px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`;

//Title
export const StyledTitle = styled.h2`
    font-size = ${(props) => props.size}px;
    text-align = center;
    color; ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`;

//SubTitle
export const StyleSubTitle = styled.p`
    font-size = ${(props) => props.size}px;
    text-align = center;
    color; ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`;

//Button
export const StyledFormButton = styled.button`
    padding: 10px;
    margin: 15px;
    width: 150px;
    background-color: transparent;
    font-size: 20px;
    border: 2px solid ${colors.primary2};
    border-radius: 25px;
    color: #000;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover {
        background-color: ${colors.primary2};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

//Button link
export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    outline: 0;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-dirrection: row;
    margin-top: 25px;
`;

//Icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px; `};
    ${(props) => !props.right && `left: 15px; `};
`;

//Error message
export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size }px;
    text-align: center;
    color: ${(props) => (props.color? props.color: colors.dark2)};
    padding: 2px;
    margin-top: 10px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

//Copyright
export const CopyrightText = styled.p`
    /* position: fixed; */
    bottom: 0;
    font-size: 20px;
    margin-top: auto;
    margin-left: 2em;
    text-align: center;
    color: ${colors.dark3};
`;

export const BUTTON_WRAPPER_STYLES = styled.div`
    position: relative;
    z-index: 1;
`

export const MODAL_STYLES = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.grayCo};
    padding: 50px;
    z-index: 1000;
`

export const OVERLAY_STYLES = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${rgba(colors.backco2,0.7)};
    z-index: 1000;
`