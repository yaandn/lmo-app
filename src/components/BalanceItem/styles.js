import styled from "styled-components/native";

export const Container = styled.View`
width:300px;
border-radius: 8px;
background-color: #${props => props.bg};
padding: 10px;
justify-content: center;
margin: 14px 14px;
padding-left: 14px;

`;

export const Label = styled.Text`
color: #FFF;
font-size: 20px;
font-weight: 400;


`;

export const Balance = styled.Text`
color: #FFF;
font-size: 30px;
margin-top: 5px;

`;