import { deleteDoc, doc } from "firebase/firestore";
import { Pressable, Text, View } from "react-native";
import { db } from "../config/firebase";

export default function DeleteUser({ id }) {
  const deleteUser = () => {
    const user = doc(db, "users", id);
    deleteDoc(user);
  };

  return (
    <View>
      <Pressable onPress={deleteUser}>
        <Text style={{ color: "red", fontSize: 20 }}>X</Text>
      </Pressable>
    </View>
  );
}
