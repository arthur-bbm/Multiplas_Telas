import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../telas/Home";
import Contato from "../telas/Contato";
import Sobre from "../telas/Sobre";
import Atividades from "../telas/Atividades";

const Drawer = createDrawerNavigator()

export default function NavegacaoLateral() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Home}/>
            <Drawer.Screen name="Contato" component={Contato}/>
            <Drawer.Screen name="Sobre" component={Sobre}/>
            <Drawer.Screen name="Atividades" component={Atividades}/>
        </Drawer.Navigator>
    )
}