import React from "react";
import { Text, StyleSheet } from "react-native";

const ImageText = (props) => (
  <Text style={styles.imageTextStyle}>{props.children}</Text>
);

const styles = StyleSheet.create({
  imageTextStyle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default ImageText;
