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
 
  const[CaraCoroa,setCaraCoroa]=useState('')

  // console.log('moedaAtual' ,moedaAtual)

  let maxGiros=Globais.qtdeGiros //recebe das classes
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
    Globais.titulo = ''
    Globais.welcome = ''
    
    indiceMoeda=0

    for(let i=0; i<(maxGiros*8); i++){
      indiceMoeda++
      if(indiceMoeda>7){
        indiceMoeda=0
      }
      setMoedaAtual(moedas[indiceMoeda])

      await espera(tempoGiro)
    }
    
    //--- Sorteio ---
    let sorteio= Math.floor(Math.random()*10)+1;

    let res
   
    console.log('sorteio' ,sorteio)

    if(sorteio<=5){
      res=0 //coroa     
      setCaraCoroa('COROA')      
      setMoedaAtual(moedas[res])
      // console.log('Globais.titulo' , Globais.titulo)

    }else {
      res=4 //cara
      setCaraCoroa('CARA')
      setMoedaAtual(moedas[res])
      // console.log('Globais.titulo' , Globais.titulo)

    }           

  }

 
  return (
    <SafeAreaView style={styles.container}>    
      <Text style={styles.welcome}>{Globais.welcome}</Text>
      <Text style={styles.welcome}>{Globais.titulo}</Text>
      
      <Text style={styles.respSorteio}>{CaraCoroa}</Text>
     
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
      justifyContent: 'space-between',
      padding:20,
    },
    welcome:{
      justifyContent: 'center',
      alignContent:'center',
      padding:10,
      fontSize:30,
      color:'#fc0',
      textAlign:'center',
    },

    image:{
      width:250,
      height:250,
      resizeMode: 'contain',
      paddingHorizontal:50,
      paddingVertical:50,
      
    },
    respSorteio:{
      marginVertical:1,
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
  





