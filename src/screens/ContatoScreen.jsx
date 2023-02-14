import { Text, View, Button } from "react-native"


export const ContatoScreen =({navigation}) =>{
    return(
        <View>
            <Text>Contato</Text>
            <Button title='Volte pro Home'
                onPress={() => navigation.navigate("Home")} />
 
        </View>
    )
}