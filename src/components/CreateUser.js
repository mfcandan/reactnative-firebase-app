import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function CreateUser() {
  const [user, setUser] = useState({ name: "" });

  const addUser = () => {
    const userDb = collection(db, "users");
    addDoc(userDb, {
      username: user.name,
    });
    setUser({ name: "" });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New User Name"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
        style={{ borderBottomWidth: 2 }}
      />
      <Pressable onPress={addUser}>
        <Text
          style={{
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            padding: 8,
            marginVertical: 20,
          }}
        >
          Add User
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
