import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={styles.container}>
      <Text>Welcome to dynamic app</Text>
      <TextInput
        placeholder="enter phone number"
        keyboardType={"phone-pad"} //for numeric keypad
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={{ marginTop: 8, height: 40, borderWidth: 2, borderColor: 'grey', padding: 4 }}
      />
      <Link
        href="/home/"
        style={{ marginTop: 8, height: 32, backgroundColor: 'orange', padding: 8 }}
      >
        Login
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
