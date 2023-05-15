import React from 'react';


import { Container, ButtonDrawer, TitleDrawer } from './style';
import Feather from '@expo/vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'




export default function Header({title}) {

  const navigation = useNavigation()

 return (
  <Container>
    <ButtonDrawer onPress = {() => navigation.openDrawer()}>
      <Feather
        name='menu'
        size={35}
        color="#121212"
      />

    </ButtonDrawer>
   {
    title && 
      <TitleDrawer>
        {title}
      </TitleDrawer>

   }

  </Container>
   
  );
}