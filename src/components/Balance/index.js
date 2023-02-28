import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti'


export default function Balance({ gastos, saldo }) {
 return (
   <MotiView
    style={styles.container}
    from={{
        rotateX: '-100deg',
        opacity: 0
    }}
    animate={{
        rotateX: '0deg',
        opacity: 1,
    }}
    transition={{
        type: 'timing',
        delay: 300,
        duration: 900,
    }}
    >
    <View style={styles.item}>
        <Text style={styles.textTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.currentSymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
        </View>
    </View>
    <View style={styles.item}>
        <Text style={styles.textTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currentSymbol}>R$</Text>
            <Text style={styles.expenses}>{gastos}</Text>
        </View>
    </View>
   </MotiView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    textTitle: {
        fontSize: 21,
        color: '#dadada',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentSymbol: {
        color: '#dadada',
        marginRight: 5,
    },
    balance: {
        fontSize: 21,
        color: '#2ecc71',
    },
    expenses: {
        fontSize: 21,
        color: '#e74c3c',
    }
})