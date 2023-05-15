import React, {useState, useContext} from 'react';
import { Container, Image, InputArea, Input, BtnSignIn, TextBtnSignIn, BtnSignUp, TextBtnSignUp  } from './style';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';

export default function SignIn() {

  const {signIn, loadingAuth} = useContext(AuthContext)
  const Navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    signIn(email, password)
  }


 return (
  <Container>
    <Image
      source = {require('../../assets/Logo.png')}
    />
    <InputArea>
      <Input
        placeholder = 'Email'
        value = {email}
        onChangeText = {(value) => setEmail(value) }
        
      />
      <Input
        placeholder = 'Senha'
        value = {password}
        onChangeText = {(value) => setPassword(value) }

      />
      <BtnSignIn onPress = {handleSignIn} activeOpacity = {0.7}>

        {
          loadingAuth ? <ActivityIndicator size={25} color= "#FFF"/> :
                      
          <TextBtnSignIn>Acessar</TextBtnSignIn>

        }

        
      </BtnSignIn>

      <BtnSignUp onPress={() => Navigation.navigate('signUp')}>
        <TextBtnSignUp>Criar uma conta gratuita</TextBtnSignUp>
      </BtnSignUp>
    </InputArea>
  </Container>
   
  );
}


