import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
justify-content: center;
background-color: #EAEEFA;
`;

export const Image = styled.Image`
height: 150px;
width: 184px;
margin-bottom: 60px;
`;

export const InputArea = styled.View`
width: 90%;
align-items: center;
justify-content: center;
gap: 15px;
`;

export const Input = styled.TextInput`
background-color: #FFF;
width: 100%;
padding: 15px;
color: #000;
font-size: 18px;
border-radius: 8px;
`;

export const BtnSignIn = styled.TouchableOpacity`
background-color: #3B44C5;
width: 100%;
padding: 15px;
justify-content: center;
align-items: center;
border-radius: 8px;
`;

export const TextBtnSignIn = styled.Text`
color: #FFF;
font-size: 20px;
font-weight: 500;

`;

export const BtnSignUp = styled.TouchableOpacity`
width: 100%;
justify-content: center;
align-items: center;


`;

export const TextBtnSignUp = styled.Text`
font-size: 14px;
font-weight: 500;
`;