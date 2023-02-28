import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

    <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonArea}>
            <AntDesign name='addfolder' size={26} color='#000' />
        </View>
        <Text style={styles.buttonLabel}>Entradas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonArea}>
            <AntDesign name='tagso' size={26} color='#000' />
        </View>
        <Text style={styles.buttonLabel}>Compras</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonArea}>
            <AntDesign name='creditcard' size={26} color='#000' />
        </View>
        <Text style={styles.buttonLabel}>Carteira</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonArea}>
            <AntDesign name='barcode' size={26} color='#000' />
        </View>
        <Text style={styles.buttonLabel}>Boletos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAction}>
        <View style={styles.buttonArea}>
            <AntDesign name='setting' size={26} color='#000' />
        </View>
        <Text style={styles.buttonLabel}>Conta</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    buttonAction: {
        alignItems: 'center',
        marginRight: 30,   
    },
    buttonArea: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})