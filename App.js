import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPilha from './src/navegacao/NavegacaoPilha'
import NavegacaoAbas from './src/navegacao/NavegacaoAbas'
import NavegacaoLateral from './src/navegacao/NavegacaoLateral'

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoLateral />
    </NavigationContainer>
  );
}