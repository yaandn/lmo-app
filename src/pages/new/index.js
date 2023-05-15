import React, {useState} from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Header from '../../components/Header'
import RegisterTypes from '../../components/RegisterTypes';

import { Background, Label, InputText, SubmitButton , SubmitText } from './styles';

import api from '../../services/api';

import { format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';



export default function New() {

    const [description, setDescription] = useState('')
    const [valueRegister, setValueRegister] = useState('')
    const [type, setType] = useState('despesa')

    const navigate = useNavigation()

    function handleSubmit() {
        Keyboard.dismiss()   
        
        if ((isNaN(parseFloat(valueRegister))) || type === null) {
            alert('Preencha todos os campos !')
            return
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueRegister)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd() {
        Keyboard.dismiss()

        await api.post('/receive', {
            description: description,
            value: Number(valueRegister),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setDescription('')
        setValueRegister('')
        navigate.goBack()
        

    }


 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
       <Background>
        <Header title = 'Registrando'/>
        <SafeAreaView style = {{
            marginTop: 14,
            alignItems: 'center'
        }}>
            <Label>Registrar</Label>
            <InputText
            placeholder = 'Descrição desse registro'
            value = {description}
            onChangeText = {(value) => setDescription(value)}
            />
            

            <InputText
            placeholder = 'Valor desejado'
            keyboardType = "numeric"
            value = {valueRegister}
            onChangeText = {(value) => setValueRegister(value)}
            />

            <RegisterTypes type = {type} sendTypeChanged = { (item) => setType(item) }/>
            
            <SubmitButton onPress={handleSubmit}>
                <SubmitText>Registrar</SubmitText>
            </SubmitButton>
       
        </SafeAreaView>
       </Background>
   </TouchableWithoutFeedback>
  );
}