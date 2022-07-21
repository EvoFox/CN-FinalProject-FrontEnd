import styled from "styled-components";

export const FormOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    padding-top: 200px;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    padding: 20px;
`;


export const InputLogin = styled.input`
    padding:3px;
    font-size: 30px;
    color: white;
    text-decoration: none;
    background: #8e8e8e;
    border: 2px solid black;
    &:hover {
        background: white;
        border: 2px solid red;
        ::-webkit-input-placeholder {color: black;} 
        ::-moz-placeholder { color: black;} 
        :-ms-input-placeholder { color: black;} 
        :-moz-placeholder {color: black;} 
    }
`;

export const LoginBtn = styled.button`
    background: black;
    color: white;
    font-size: 20px;
    width: 250px;
    height: 40px;
    border: 2px solid white;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: 2px solid red;
    }
`

export const FormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: max-content;
    height: max-content;
    background: transparent;
    border: 2px solid white;
    padding-bottom: 20px;
    background-color: black;
`

export const FormTitle = styled.h3`
    display: flex;
    font-size: 45px;
    background: black;
    padding: 10px;
    border: 2px solid white;
    color: white;
`