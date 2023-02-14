import { Button, Text, View } from "react-native"


export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home page</Text>
            <Button title='Ir para Sobre'
                onPress={() => navigation.navigate("Sobre")} />
<Button title='Ir para Contato'
                onPress={() => navigation.navigate("Contato")} />
                 <Button title='Ir para Produto'
                onPress={() => navigation.navigate("Produto")} />
        </View>
    );
};
