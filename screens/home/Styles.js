import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const btn = {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
  };
  
  const btnText = {
    fontSize: 15,
    fontWeight: "400",
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: "white",
    },
    title: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: 28,
      color: "#1FAEEB",
      fontWeight: "500",
    },
    banner: {
      flex: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    imgBanner: {
      width: windowWidth - 60,
      height: windowWidth - 60,
      resizeMode: "contain",
    },
    action: {
      flex: 2,
      justifyContent: "space-around",
      paddingHorizontal: 80,
    },
    btnLogin: {
      ...btn,
      backgroundColor: "#1FAEEB",
    },
    btnLoginText: {
      ...btnText,
      color: "white",
    },
    btnRegister: {
      ...btn,
      backgroundColor: "#D9D9D9",
    },
    btnRegisterText: {
      ...btnText,
    },
    language: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingBottom: 20,
    },
    btnVietnamese: {
      marginRight: 20,
    },
  });

export default styles;
export { btn, btnText };