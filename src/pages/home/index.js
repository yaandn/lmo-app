import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import { Background, ListBalance, Area, Title, List } from './styles';
import CardList from '../../components/CardList';

import Header from '../../components/Header';
import BalanceItem from '../../components/BalanceItem';

import api from '../../services/api';

import { format } from 'date-fns'

import { useIsFocused } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons'
import { TitleDrawer } from '../../components/Header/style';


export default function Home() {
  const isFocused = useIsFocused()

  const [listBalance, SetListBalance] = useState([])

  const [dateMovements, setDateMovements] = useState(new Date())

  const [movements, setMovements] = useState([])



  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormat = format(dateMovements, 'dd/MM/yyyy')
      console.log(dateFormat)

      const receives = await api.get('/receives', {
        params: {
            date: dateFormat
        }
      })

      const balance = await api.get('/balance', {
        params: {
          date: dateFormat
        }
      })

      console.log(receives.data)
      console.log(balance.data)

      if (isActive) {
        SetListBalance(balance.data)
        setMovements(receives.data)
      }


    }

    getMovements();

    return () => isActive = false
    


  }, [isFocused])

  
 return (
  <Background>
    <Header title = 'Minhas Movimentações'/>
    <ListBalance

      data = {listBalance}
      horizontal = {true}
      showsHorizontalScrollIndicator={false}
      KeyExtractor = {(item) => item.tag}
      renderItem = {({item}) => <BalanceItem data = {item}/>}

    />

    <Area>
        <TouchableOpacity>
            <Icon
                name='event'
                color="#121212"
                size={35}
            />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
    </Area>

    <List
        data = {[1,2,3]}
        KeyExtractor = {item => item.id}
        renderItem = {({item}) => <CardList/>}
        showsVerticalScrollIndicator  = {false}
    />



  </Background>
  );
}