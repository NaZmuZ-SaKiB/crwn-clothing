import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const CartItemsContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const CustomButtonContainer = styled(CustomButton)`
    margin-top: auto;
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`