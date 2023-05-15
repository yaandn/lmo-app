import styled from "styled-components/native";

export const Container = styled.View`
width: 90%;
height: 60px;
flex-direction: row;
justify-content: space-between;

`;



export const RegisterButton = styled.TouchableOpacity`
background-color: ${props => props.checked ? '#FFF': '#E7E7E7'};
justify-content: center;
align-items: center;
flex-direction: row;
width: 47%;
height: 45px;
border-radius: 8px;
border-width: 1.5px;
border-color: ${props => props.checked ? '#3b3dbf': '#E7E7E7'};



`;

export const RegisterLabel  = styled.Text`
font-size: 19px;
margin-left: 8px;


`;