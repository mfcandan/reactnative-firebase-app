import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./src/config/firebase";
import CreateUser from "./src/components/CreateUser";
import DeleteUser from "./src/components/DeleteUser";

export default function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "users");
    onSnapshot(usersQuery, (snapshot) => {
      let usersList = [];
      snapshot.docs.map((doc) => usersList.push({ ...doc.data(), id: doc.id }));
      setPeople(usersList);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text style={{ fontSize: 25, marginLeft: 10 }}>
        {"👉🏻"} {item.username} <DeleteUser id={item.id} />
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>RN Firebase App</Text>
      <Text
        style={{
          fontSize: 25,
          textDecorationLine: "underline",
          marginBottom: 30,
        }}
      >
        My Users:
      </Text>
      <CreateUser />
      <FlatList
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: "80%",
        }}
        data={people}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
