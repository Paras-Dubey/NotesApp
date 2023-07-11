import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewBase,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.itemButton}>
          <Text style={styles.title}>ADD NEW NOTE</Text>
          <Icon style={styles.icon} name="arrow-forward-outline" />
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.itemButton}>
          <Text style={styles.title}>VIEW ALL NOTES</Text>
          <Icon style={styles.icon} name="arrow-forward-outline" />
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
    elevation: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    fontSize: 30,
    paddingTop: 20,
  },
});
