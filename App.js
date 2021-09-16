import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageText from "./components/ImageText";
import data from "./data";
import CustomButton from "./components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";

const App = () => {
  const [images, setImages] = useState(data);
  const [current, setCurrent] = useState(0);

  console.log(images[current]);

  const checkIndex = (index) => {
    if (index < 0) {
      return images.length - 1;
    } else if (index > images.length - 1) {
      return 0;
    }

    return index;
  };

  const handlePress = (direction) => {
    direction === "next"
      ? setCurrent(checkIndex(current + 1))
      : setCurrent(checkIndex(current - 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={images[current].img}
          fadeDuration={500}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <ImageText>
        <Text>{images[current].about}</Text>
      </ImageText>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={() => handlePress("prev")} bg="#708D81">
          <FontAwesome5 name="arrow-left" size={24} color="white" />
          {"  "}
          Prev
        </CustomButton>
        <CustomButton onPress={() => handlePress("next")} bg="#001427">
          Next
          {"  "}
          <FontAwesome5 name="arrow-right" size={24} color="white" />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 300,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "#000",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
  },
});

export default App;
