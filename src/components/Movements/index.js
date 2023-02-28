import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                { showValue ? (
                                    <Text 
                                    style={data.type === 1 ? 
                                        styles.value : styles.expenses
                                    }>
                                        {data.type === 1 ?
                                            `R$ +${data.value}` : `R$ -${data.value}`
                                        }
                                    </Text>
                ) : (
                    <View style={styles.grey}>

                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.6,
        borderBottomColor: '#000'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        color: '#226ecc',
        fontSize: 16,
        fontWeight: 'bold'
    },
    expenses: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold'
    },
    grey: {
        marginTop: 6,
        width: 82,
        height: 10,
        backgroundColor: 'grey',
        borderRadius: 8,
    }
})