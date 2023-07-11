import { Dimensions, StyleSheet, Text, View, ViewBase } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemButton}>ADD NEW NOTE</Text>
      </View>
      <View>
        <Text style={styles.itemButton}>VIEW ALL NOTES</Text>
      </View>
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
    width: Dimensions.get('window').width-100,
  },
});
