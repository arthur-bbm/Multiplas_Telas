import { StyleSheet, Text, View, Button } from 'react-native';


export default function Sobre({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Text>Página Sobre</Text>
      <View>
        <Button title='contato' color='pink' onPress={() => navigation.navigate('Contato')} />
        <Button title='Atividades' color='blue' onPress={() => navigation.navigate('Atividades')}/>
        <Button title='Home' color='red' onPress={() => navigation.navigate('Inicio')}/>
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
