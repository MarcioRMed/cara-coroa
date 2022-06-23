import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  const moedas =[
    require('./images/m1.png'),
    require('./images/m2.png'),
    require('./images/m3.png'),
    require('./images/m4.png'),
    require('./images/m5.png'),
    require('./images/m6.png'),
    require('./images/m7.png'),
    require('./images/m8.png'),
  ]

  let indiceMoeda=0
  const maxGiros = 10

  const [moedaAtual,setMoedaAtual]=useState(moedas[indiceMoeda])

  console.log('moedaAtual' ,moedaAtual)

  async function espera(tmp){ //tempo
    function tempo(ms){
      return new Promise(resolve=>setTimeout(resolve, ms))             
    }
    await tempo(tmp)
  }

  async function girarMoeda(){
    indiceMoeda=0

    for(let i=0; i<(maxGiros*8); i++){
      indiceMoeda++
      if(indiceMoeda>7){
        indiceMoeda=0
      }
      setMoedaAtual(moedas[indiceMoeda])

      await espera(10)
    }

    let res= Math.floor(Math.random()*10)+1;

    if(res<=5)
      res=0
    else
      res=4  

      setMoedaAtual(moedas[res])

  }

  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.title}>Cara ou Coroa</Text>
     
      <Image style={styles.image} 
             source={moedaAtual} />
        
      <Button title='Girar'
              onPress={()=>{girarMoeda()}}/>  
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:250,
    height:250,
    resizeMode: 'contain',
    
  },
  title:{
    justifyContent:'center',
    alignContent:'center',
  }
});
