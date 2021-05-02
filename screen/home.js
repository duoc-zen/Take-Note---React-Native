import React, { useState } from 'react'
import { useEffect } from 'react';
import { TextInput, TouchableOpacity, View, Alert, StyleSheet, FlatList, Text } from 'react-native'
import { firebaseApp } from '../config/firebase'

const homeScreen = ({ navigation, route }) => {

    const { uid } = route.params;
    const [DATA, setData] = useState([]);

    const getData = () => {
        firebaseApp.database()
            .ref('/users/' + uid)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(i => {
                    let t = {
                        id: i.key,
                        note: i.val().note,
                        date: i.val().date
                    }
                    arr.push(t);
                    console.log('User data: ', t.id);
                })
                setData(arr);
            });
    }

    useEffect(getData, []);

    const deleteNote = (id) => {
        Alert.alert("cảnh báo", "Bạn có muốn xóa không ?", [
            {
                text: "Yes",
                onPress: () => firebaseApp.database()
                    .ref('/users/' + uid + '/' + id)
                    .remove(),
                style: "cancel"
            },
            { text: "No", onPress: console.log("hello") }
        ]
        )
        console.log('/users/' + uid + '/' + id);

    }

    const renderItem = ({ item }) => {

        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("takenote", { uid: uid, editor: true, note_old: item })}>
                    <Text>{item.note}</Text>
                    <Text>{item.date}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                    <Text>Delete note</Text>
                </TouchableOpacity>
            </View>
        )

    }




    return (
        <View style={style.container}>
            <Text>Home Screen</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />

            <TouchableOpacity onPress={() => navigation.navigate("takenote", { uid: uid, editor: false })}>
                <Text>Take Note</Text>
            </TouchableOpacity>
        </View>
    )
}

export default homeScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})