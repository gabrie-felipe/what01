import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D4B73",
  },
  box: {
    backgroundColor: "#D9D9D9",
    width: 373,
    height: 450,
    borderRadius: 15,
  },
  texto: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 27,
    fontWeight: "bold",
  },
  dig: {
    marginTop: 60,
    margin: 30,
    fontSize: 27,
  },
  input: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    overflow:"hidden",
    height: 44,
    width: 341,
    margin: 12,
    backgroundColor: "#ECECEC",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    textDecorationLine: "none"
  },
 button: {

  height: 50,
  width: 222,
  backgroundColor: 'black',
  color: 'white'
 },
 button2: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'black',
},
text2: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},
});
