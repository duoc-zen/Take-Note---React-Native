import React, {useState} from 'react'
import {TextInput, TouchableOpacity, View,StyleSheet, Text, Alert} from 'react-native'
import {firebaseApp} from '../config/firebase'

const signinScreen = ({navigation}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signin = () =>{
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                Alert.alert("Đăng ký thành công", "Bạn có thể đăng nhập bây giờ");
                navigation.replace("login");
            })
            .catch((error) => {
                Alert.alert("Đăng ký thất bại", error.message+"");
            });
    }


    return(
        <View style={style.container}>
            <TextInput placeholder="Email" onChangeText={text =>setEmail(text)} />
            <TextInput placeholder="Password" onChangeText={text =>setPassword(text)} />
            <TouchableOpacity onPress={signin}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default signinScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})