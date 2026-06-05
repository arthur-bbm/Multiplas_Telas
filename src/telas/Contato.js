import { StyleSheet, Text, View, Button } from 'react-native';


export default function Contato({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Contato</Text>
      <Text>Página Contato</Text>
      <View>
        <Button title='Home' color='pink' onPress={() => navigation.navigate('Inicio')}/>
        <Button title='Atividades' color='blue' onPress={() => navigation.navigate('Atividades')}/>
        <Button title='Sobre' color='red' onPress={() => navigation.navigate('Sobre')}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
