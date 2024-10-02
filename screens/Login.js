import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert }  from "react-native";
import { TextInput } from "react-native-gesture-handler";

import appFirebase from '../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)



export default function Login(props) {

    //variable de estado
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async()=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            Alert.alert('Iniciando sesion','Accediendo...')
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error!','Usuario o contraseña incorrecta' )
        }
    }

    return (
        <View style={styles.padre}>
            
            <View>
                <Image source={require('../assets/profile1.png')} style={styles.profile} />
            </View>

            <View style={styles.tarjeta} >
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo@gmail.com' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setEmail(text)} />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Password' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setPassword(text)} secureTextEntry={true} />
                </View>

                <View style={styles.PadreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                        <Text style={styles.TextoBoton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    profile:{
        width:150,
        height:150,
        borderRadius:50,
        borderColor:'white'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0,
        shadowRadius:4,
        elevation:5,
    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10
    },
    PadreBoton:{
        alignItems:'center'
    },
    cajaBoton:{
        backgroundColor:'#525FE1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    TextoBoton:{
        textAlign:'center',
        color:'white'
    }
});