import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Globais from './globais';

export default function telaJogo(){
  
  const moedas =[
    require('../images/m1.png'),
    require('../images/m2.png'),
    require('../images/m3.png'),
    require('../images/m4.png'),
    require('../images/m5.png'),
    require('../images/m6.png'),
    require('../images/m7.png'),
    require('../images/m8.png'),
  ]

  let indiceMoeda=0
  const [moedaAtual,setMoedaAtual]=useState(moedas[indiceMoeda])

  console.log('moedaAtual' ,moedaAtual)

  let maxGiros=Globais.qtdeGiros
  let tempoGiro= Globais.tempEspera

  async function espera(tmp){ //tempo
    function tempo(ms){
      return new Promise(resolve=>setTimeout(resolve, ms))             
    }
    await tempo(tmp)
  }

  async function girarMoeda(){
    maxGiros=Globais.qtdeGiros
    tempoGiro=Globais.tempEspera
    indiceMoeda=0

    for(let i=0; i<(maxGiros*8); i++){
      indiceMoeda++
      if(indiceMoeda>7){
        indiceMoeda=0
      }
      setMoedaAtual(moedas[indiceMoeda])

      await espera(tempoGiro)
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
      <Text style={styles.title}>{Globais.titulo}</Text>
     
      <Image style={styles.image} 
             source={moedaAtual} />
        
      <TouchableHighlight
        style={styles.btnGirar}      
        onPress={()=>{girarMoeda()}}
        >  
       <Text style={styles.txtBtn}>Girar</Text>
      </TouchableHighlight>  
    </SafeAreaView>
  );
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
    },

    image:{
      width:250,
      height:250,
      resizeMode: 'contain',
      paddingHorizontal:50,
      
    },
    title:{
      justifyContent:'center',
      alignContent:'center',
      padding:20,
      fontSize:30,
      color:'#fc0',
      // textTransform:'uppercase',
    },
    btnGirar:{
      margin:20,
      backgroundColor:'#fc0',
      padding:15,
      width:'100%',
      borderRadius:5,
      justifyContent:'center',
      alignItems: 'center',
     },
    txtBtn:{
      color:'#000',
      textTransform:'uppercase',
      fontSize:'20,'

    },
  });
  





