import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../telas/Home";
import Contato from "../telas/Contato";
import Sobre from "../telas/Sobre";
import Atividades from "../telas/Atividades";

const Stack = createNativeStackNavigator();

export default function NavegacaoPilha() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inicio" component={Home}/>
            <Stack.Screen name="Contato" component={Contato}/>
            <Stack.Screen name="Sobre" component={Sobre}/>
            <Stack.Screen name="Atividades" component={Atividades}/>
        </Stack.Navigator>
    )
}