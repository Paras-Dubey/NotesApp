import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { ScreenType } from "./Constants/Constants";
import AddNote from "./Screens/AddNote";
import AllNotesScreen from "./Screens/AllNotesScreen";

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  let content;
  if (screen === ScreenType.addNote) {
    content = <AddNote />;
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen />;
  }
  if (screen === ScreenType.home) {
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
