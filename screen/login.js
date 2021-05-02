import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Alert,StyleSheet, Text } from 'react-native'
import {firebaseApp} from '../config/firebase'

const loginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            Alert.alert("Đăng nhập thành công");
            navigation.replace("home", {uid:user.uid});
        })
        .catch((error) => {
            Alert.alert("Đăng nhập thất bại", error.message+"");
        });
    }


    return (
        <View style={style.container}>
            <TextInput placeholder="Email" onChangeText={text => setEmail(text)} />
            <TextInput placeholder="Password" onChangeText={text => setPassword(text)} secureTextEntry={true} />
            <TouchableOpacity onPress={login}>
                <Text>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("signin")}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}


export default loginScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})