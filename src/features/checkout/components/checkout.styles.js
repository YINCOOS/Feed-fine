import React from "react";
import styled from "styled-components/native";
import { Avatar, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
export  const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;`;

export const CartIcon = styled(Avatar.Icon).attrs({
    size: 128,
})`
background-color: ${(props) => props.theme.colors.brand.primary};`;

export const NameInput = styled(TextInput)`
  margin: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 90%;
    font-size: 18px;
    background-color: white;
    color: black;
  `;

export const PayButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
width:80%;
border-radius: 5px;
align-self: center;
padding: 10px;`;

export const ClearButton = styled(Button).attrs({
    color: colors.ui.error,
})`
width:80%;
border-radius: 5px;
align-self: center;
background-color: red;
padding: 10px;`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
    size:128,
    animating: true,
    // color: colors.brand.primary,
})`
position: absolute;
top: 50%;
left: 35%;
z-index: 999;
color: ${colors.brand.primary};`;