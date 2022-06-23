import React,{useState} from 'react';
import {StyleSheet, View, Text, TextInput } from 'react-native';
import Globais from './globais'

export default function telaConfig(){
  
  const [giros,setGiros]=useState(Globais.qtdeGiros)
  const [tempo,setTempo]=useState(Globais.tempEspera)

  const setarGiros=(valor)=>{
    Globais.qtdeGiros=parseInt(valor)
    setGiros(valor)
  }

  const setarTempo=(valor)=>{
    Globais.tempEspera=parseInt(valor)
    setTempo(valor)
  }

  return(
    <View style={styles.view}>

      <Text style={styles.text}>Quantidade de giros:</Text>
      <TextInput
        style={styles.textInput}
        value={String(giros)}
        onChangeText={(valor)=>{setarGiros(valor)}}
      />

      <Text style={styles.text}>Velocidade do giro</Text>
      <TextInput
        style={styles.textInput}
        value={String(tempo)}
        onChangeText={(valor)=>{setarTempo(valor)}}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#000',
    padding:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color:'#fff',
    paddingBottom:8,
  },
  textInput:{
    borderWidth:1,
    borderColor:'#fff',
    borderRadius: 10,
    padding:10,
    marginBottom:20,
    color:'#fc0',
  },

});
