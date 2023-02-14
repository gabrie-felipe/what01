import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SobreScreen } from "../screens/SobreScreen";
import {ContatoScreen} from "../screens/ContatoScreen"
import {ProdutoScreen} from "../screens/ProdutoScreen"

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Sobre'} component={SobreScreen} />
            <Stack.Screen name={'Contato'} component={ContatoScreen} />
            <Stack.Screen name={'Produto'} component={ProdutoScreen} />
        </Stack.Navigator>
    );
};
