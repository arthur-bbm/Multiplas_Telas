import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../telas/Home";
import Contato from "../telas/Contato";
import Sobre from "../telas/Sobre";
import Atividades from "../telas/Atividades";

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="Contato" component={Contato} />
            <Tab.Screen name="Atividades" component={Atividades} />
            <Tab.Screen name="Sobre" component={Sobre} />
        </Tab.Navigator>
    )
}