import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Página inicial</Text>
      <View>
        <Button title='Contato' color='pink' onPress={() => navigation.navigate('Contato')}/>
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
