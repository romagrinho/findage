import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native"

export default function Home(){
    
   
    let [ano1,setano1 ] = useState();
    let [ano2,setano2 ] = useState();
    let [total, setTotal]   = useState();

    function CalcularTotal(){

        let resultado = (parseFloat(ano1) - parseFloat(ano2)); 
        setTotal(resultado);

        alert("Sua idade é de: " + total + " anos");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Sua idade</Text>

            <TextInput onChangeText={setano1} style={styles.campo} placeholder="Digite o ano atual "/>
            <TextInput onChangeText={setano2} style={styles.campo} placeholder="Digite o ano do seu nascimento "/>

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}> Calcular </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3B3936',
            flex:1,
            justifyContent:'center',
            alignItems: 'center'
    },

    titulo:{
        fontSize:25,
        color:'#FFF',
        fontWeight: 'bold',
        marginBottom:40
    },
    campo:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width:250
    },
    botao:{
        backgroundColor: '#BD2A2E',
        alignItems:'center',
        padding:15,
        borderRadius: 7,
        marginTop: 20,
        width:250
    },

    botaoTexto:{
        color:'#FFFF',
        fontSize: 17,
        fontWeight:'700',
    }
});