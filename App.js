import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor= "#EAEEFA" barStyle= "dark-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

