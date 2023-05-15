import React, {useState} from 'react';
import { Container , RegisterButton, RegisterLabel} from './styles';

import Feather from '@expo/vector-icons/Feather'

export default function RegisterTypes({type, sendTypeChanged}) {

  const [typeChecked, setTypeChecked] = useState(type)

  function changeType(name) {

    if (name === 'receita') {
      setTypeChecked('receita')
      sendTypeChanged('receita')
    } else {
      setTypeChecked('despesa')
      sendTypeChanged('despesa')
    }

  }

  return (
      <Container>

        <RegisterButton 
        checked = { typeChecked === 'receita' ? true : false }
        onPress = {() => changeType('receita')}
        >
          <Feather
            name='arrow-up'
            size={25}
            color = '#121212'
          />
          <RegisterLabel>Receita
          </RegisterLabel>
        </RegisterButton>

        <RegisterButton 
        checked = { typeChecked === 'despesa' ? true : false }
        onPress = {() => changeType('despesa')}
        >
        <Feather
            name='arrow-down'
            size={25}
            color = '#121212'
          />
          <RegisterLabel>Despesa</RegisterLabel>
        </RegisterButton>
          
      </Container>
  
  );
}