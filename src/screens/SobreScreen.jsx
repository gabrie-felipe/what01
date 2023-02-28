import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export const SobreScreen = ({ navigation }) => {
  const [email, setEmail] = useState({
    value: "",
    error: "VOCE AINDA NAO DIGITOU SEU MANE",
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.texto}>Recuperar senha</Text>
        <Text style={styles.dig}>Digite seu e-mail</Text>
        <TextInput style={styles.input}
          label="Digite aqui"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
        />
      </View>
    </View>
  );
};
