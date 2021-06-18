import React, { Component } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore';

export default class PrimeiroProjeto extends Component{

  constructor(props){

    super(props);
    this.state = {

      email: '',
      senha: ''
    }
  
    this.cadastrar = this.cadastrar.bind(this);
            
    var firebaseConfig = {
      apiKey: "AIzaSyAYLWqz3Mfef_SdmO2gNjneYAvy_1yuoYY",
      authDomain: "primeiroprojeto-6203b.firebaseapp.com",
      projectId: "primeiroprojeto-6203b",
      storageBucket: "primeiroprojeto-6203b.appspot.com",
      messagingSenderId: "358436815675",
      appId: "1:358436815675:web:ba8785e92e50527cac6d1e",
      measurementId: "G-6MH3C0B3RB"
    };
    // Initialize Firebase
    if(!firebase.apps.length){

      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      }
      
  };

  cadastrar(){


  }

  render(){
    
    return(

      <View style={styles.container}>
        <Text style={styles.h1}>Tela de Cadastro</Text>
        
        <Text>E-mail:</Text>
        <TextInput onChangeText={(email)=>this.setState({email})}/>

        <Text>Senha:</Text>
        <TextInput secureTextEntry={true} onChangeText={(senha)=>this.setState({senha})}/>
        
        <Button title="Cadastrar" onPress={this.cadastrar}/>


      </View>
      
    );


  };

}

const styles = StyleSheet.create({

  container:{
    
    flex:1,
    margin:20
  },

  h1:{

    fontSize:28,
    textAlign:'center',
    margin:20
  },

  input:{

    height:40,
    borderWidth:1,
    borderColor:'#000000',
    marginBottom:10
  }
  
});
