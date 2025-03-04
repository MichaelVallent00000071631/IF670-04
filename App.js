import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const contacts = [
  { id: "1", name: "John Smith", email: "johnsmith@example.com", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: "2", name: "Jane Doe", email: "janedoe@example.com", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: "3", name: "Michael Johnson", email: "michaeljohnson@example.com", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: "4", name: "Emily Williams", email: "emilywilliams@example.com", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: "5", name: "William Brown", email: "williambrown@example.com", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: "6", name: "Olivia Jones", email: "oliviajones@example.com", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: "7", name: "James Miller", email: "jamesmiller@example.com", image: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: "8", name: "Sophia Davis", email: "sophiadavis@example.com", image: "https://randomuser.me/api/portraits/women/8.jpg" },
  { id: "9", name: "Ethan Garcia", email: "ethangarcia@example.com", image: "https://randomuser.me/api/portraits/men/9.jpg" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});

// import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
// import userData from "./data.json";
// import styles from "./App.styles";

// export default function App() {
//   return (
//     <ScrollView>
//       {userData.map((users) => {
//         return (
//           <View style={styles.container} key={users.name}>
//             <View style={styles.card}>
//               <Image
//                 source={{
//                   uri: users.photo_url,
//                 }}
//                 style={styles.avatar}
//               />
//               <View style={styles.boldText}>
//                 <Text style={styles.boldText}>{users.name}</Text>
//                 <Text>{users.email}</Text>
//               </View>
//             </View>
//           </View>
//           );
//       })}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 5,
//     display: "flex",
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: "black",
//     borderRadius: 8,
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "row",
//     padding: 8,
//     width: 325,
//     gap: 8,
//   },
//   avatar: {
//     width: 75,
//     height: 75,
//     borderRadius: 999,
//   },
//   boldText: {
//     fontweight: "bold",
//   },
//   description: {
//     width: "fit-content",
//     display: "flex",
//     gap: 2,
//   },
// });