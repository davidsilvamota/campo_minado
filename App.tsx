import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params/Params';
import Teste from './src/components/Teste';
import Fild from './src/components/Fild';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Iniciando o Mines</Text>
      <Text>Tamanho da Grade : {params.getRownsAmount()}x{params.getColumnsAmount()} </Text>
      <Fild></Fild>
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
