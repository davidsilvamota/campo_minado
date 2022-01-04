import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/parans/Params';
import Teste from './src/components/Teste';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Iniciando o Mines</Text>
      <Text>Tamanho da Grade : {params.getRownsAmount()}x{params.getColumnsAmount()} </Text>
      <Teste></Teste>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
