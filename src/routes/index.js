import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";



function Routes () {
    
    
    const {signed, loading} = useContext(AuthContext)

    if (loading) {
        return (
            <View style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size="large" color="#121212"/>
            </View>
            
        )   
    } else {
        return (
            signed ? <AppRoutes/> : <AuthRoutes/>
        )
    }

    
}

export default Routes;