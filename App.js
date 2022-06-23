// import React from 'react';
import {StyleSheet} from 'react-native';
import TelaJogo from './components/telaJogo'
import TelaConfig from './components/telaConfig'

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  return (
    <View >
     <TelaJogo/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View >
      <TelaConfig/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={temaMenu}>
      <Tab.Navigator>
        <Tab.Screen name="Jogo" component={HomeScreen} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


 const temaMenu={
   dark:false,
   colors:{
     primary: '#fc0', //cor do texto menu selecionado
     background: 'rgb(0,0,0)', //cor de fundo
     card: 'rgb(0,0,0)', //cor do fundo do menu
     text: 'rgb(255,255,255)', //cor texto
     border: 'rgb(255,255,255)', //cor da borda
     notification: 'rgb(255,0,0)', //cor do emblema do navegador

   }
 }


const styles = StyleSheet.create({
  
});
