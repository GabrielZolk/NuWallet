import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';

const faker = [
  {
    id: 1,
    label: 'Cartão RP',
    value: '200,00',
    date: '10/10/2014',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Nu Pagamentos S.A',
    value: '2.400,00',
    date: '11/10/2014',
    type: 1
  },
  {
    id: 3,
    label: 'Salary - ProFUSION',
    value: '20.000,00',
    date: '15/10/2015',
    type: 1
  },
]

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
    <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header name='Zolk 🍷🗿'/>
      <Balance saldo='94.000,00' gastos='6.000,00' />
      <Actions />
      <Text style={styles.title}>Movimentações</Text>
      <FlatList
        style={styles.faker}
        data={faker}
        keyExtractor={(id) => String(id.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  faker: {
    marginStart: 14,
    marginEnd: 14,
  }
});
