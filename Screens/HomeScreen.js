import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewBase,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.itemButton}>
          <Text>ADD NEW NOTE</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.itemButton}>
          <Text>VIEW ALL NOTES</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
  },
  itemButton: {
    width: Dimensions.get("window").width - 100,
    height: "50%",
    marginVertical: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});
