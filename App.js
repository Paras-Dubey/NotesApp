import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { ScreenType } from "./Constants/Constants";
import AddNote from "./Screens/AddNote";
import AllNotesScreen from "./Screens/AllNotesScreen";
import BackButton from "./Components/BackButton";

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  const updateScreen = (data) => {
    setScreen(data);
  };
  let content;
  if (screen === ScreenType.addNote) {
    content = (
      <AddNote
        onExit={updateScreen}
        onSave={(data) => setNotes([...notes, { id: Date.now(), note: data }])}
      />
    );
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen notes={notes} />;
  } else if (screen === ScreenType.home) {
    content = <HomeScreen onExit={updateScreen} />;
  }
  console.log(notes);
  return (
    <View style={styles.container}>
      <Header />
      {screen !== ScreenType.home && (
        <BackButton onButtonClick={updateScreen} />
      )}
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
