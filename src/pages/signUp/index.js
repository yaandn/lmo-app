import React, {useContext, useState} from 'react';
import { Container, InputArea, Input, BtnSignIn, TextBtnSignIn } from '../signIn/style';
import { AuthContext } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';



export default function SignUp() {

  const {signUp, loadingAuth} = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp() {
    if (email === '' || name === '' || password === '') {
      alert('Preencha todos os campos')
      return
    }
    
    signUp(email, password, name)
  }

  return (
    <Container>
      <InputArea>
        <Input
          placeholder='Seu Nome'
          onChangeText={(value) => setName(value)}
          value = {name}
          
        />

        <Input
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
          value = {email}

        />

        <Input
          placeholder='Senha'
          onChangeText={(value) => setPassword(value)}
          value = {password}
          secureTextEntry = {true}
        />

        <BtnSignIn onPress={handleSignUp} activeOpacity = {0.7}>

          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF'/>
            ) : <TextBtnSignIn>Cadastrar</TextBtnSignIn>

          }

          
        </BtnSignIn>
      </InputArea>
    </Container>
    
    );
}

