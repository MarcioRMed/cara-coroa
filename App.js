import React from 'react';
import {StyleSheet , View} from 'react-native';
import TelaJogo from './components/telaJogo'
import TelaConfig from './components/telaConfig'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Menus=createBottomTabNavigator()

export default function App(){
  return(
    <View>
    <TelaJogo/>
    <TelaConfig/>
    </View>)}

//       <NavigationContainer theme={temaMenu}>
//         <Menus.Navigator initialRouteName='Jogo'>
        
//         <Menus.Screen
//           // style={styles.menu}
//           name="Jogo"
//           component={TelaJogo}
//           options={{
//             title:'Jogo',
//           }}
//         />
        
//         <Menus.Screen 
//           nome="Configurações"
//           component={TelaConfig}
//          />
        
//         </Menus.Navigator>
//       </NavigationContainer>
//   )
// }

// const temaMenu={
//   dark:false,
//   colors:{
//     primary: 'rgb(255,255,255)', //cor do texto menu selecionado
//     background: 'rgb(0,0,0)', //cor de fundo
//     card: 'rgb(0,0,0)', //cor do fundo do menu
//     text: 'rgb(255,255,255)', //cor texto
//     border: 'rgb(255,255,255)', //cor da borda
//     notification: 'rgb(255,0,0)', //cor do emblema do navegador

//   }
// }


const styles = StyleSheet.create({
  
});
