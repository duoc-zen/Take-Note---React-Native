import React, { useState } from 'react'
import { useEffect } from 'react';
import { TextInput, TouchableOpacity, View, Alert, StyleSheet, FlatList, Text } from 'react-native'
import { firebaseApp } from '../config/firebase'

const takenoteScreen = ({ navigation, route }) => {

    const { uid, editor, note_old } = route.params;

    const [text, setText] = useState('');

    useEffect(()=>{
        if(editor)
            setText(note_old.note);
    },[])

    const save = () => {

        let d = new  Date();
        let mdate = d.getHours()+':'+d.getMinutes() + ' ' + d.getDate()+'/'+Number(d.getMonth()+1) +'/'+d.getFullYear();

        let temp = {
            note: text,
            date: mdate
        }

        if (editor) {
            firebaseApp.database()
                .ref('/users/' + uid + '/' + note_old.id)
                .update(temp)
                .then(() => console.log('Data updated.'));
        }
        else {
            const newReference = firebaseApp.database()
                .ref('/users/'+ uid)
                .push();

            console.log('Auto generated key: ', newReference.key);

            newReference
                .set(temp)
                .then(() => console.log('Data new.'));
        }
        navigation.navigate("home");
    }

    return (
        <View style={style.container}>
            <TextInput value={text} onChangeText={Text => setText(Text)} placeholder="take note now !" />
            <TouchableOpacity onPress={save}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default takenoteScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})