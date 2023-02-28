import { MotiView } from 'moti';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
        <MotiView
            from={{
                rotateZ: '0deg',
                opacity: 0,
            }}
            animate={{
                rotateZ: '360deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                delay: 100,
                duration: 650,
            }}
        >

      <Image
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-1.png' }}
        style={styles.image}
      />
        </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A05BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
