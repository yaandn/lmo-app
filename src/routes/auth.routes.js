import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='signIn'
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name='signUp'
                component={SignUp}
                options={{
                    headerBackTitle: false,
                    title: 'Voltar',
                    
                    headerStyle: {
                        backgroundColor: '#3844C6',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',  
                    },
                    
                    headerTintColor: '#FFF',

                

                }}
    
            />

        </AuthStack.Navigator>

    )
}

export default AuthRoutes;

