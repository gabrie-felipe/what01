import { Text, View, Button } from "react-native"


export const ProdutoScreen =({navigation}) =>{
    return(
        <View>
            <Text>Protudo</Text>
            <Button title='Volte pro Home'
                onPress={() => navigation.navigate("Produto")} />
 
        </View>
    )
}
