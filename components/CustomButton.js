import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = ({ children, onPress, bg }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: bg }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
