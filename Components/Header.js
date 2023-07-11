import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Sticky Notes</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Platform.OS == "android" ? "purple" : "white",
    width: "100%",
    height: "13%",
    paddingTop: 30,
  },
  headerTitle: {
    color: Platform.OS == "android" ? "white" : "purple",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    marginTop: 10,
  },
});
