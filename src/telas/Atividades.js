import { StyleSheet, Text, View, Button } from 'react-native';


export default function Atividades({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Atividade</Text>
      <Text>Página Atividades</Text>
      <View>
        <Button title='contato' color='pink' onPress={() => navigation.navigate('Contato')}/>
        <Button title='Home' color='blue' onPress={() => navigation.navigate('Inicio')}/>
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
