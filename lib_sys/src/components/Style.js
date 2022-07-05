import styled from 'styled-components';


//import background from './../assets/bg.png'

//React router
import { Link } from 'react-router-dom';

export const colors = {
    primary: "#fff",
    primary2: "#66BFBF",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"

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
    width: 150px;
    background-color: transparent;
    font-size: 16px;
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
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.dark3};
`;