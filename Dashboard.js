import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

function Dashboard() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>This is our Dashboard!</Text>
        <View>
          <Text style={styles.body}>
            <MaterialCommunityIcons
              name="logout-variant"
              color="#E64A19"
              size="30"
            />
            Log Out
          </Text>
          <Text style={styles.body}>
            <MaterialCommunityIcons
              name="logout-variant"
              color="#E64A19"
              size="30"
            />
            Log Out
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: ,
    paddingHorizontal: 16, // 좌우측 패딩
    // borderColor: 'lightgrey',
    textAlign: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  body: {
    fontSize: 25,
    marginBottom: 10,
  },
  title: {
    // margin: 40,
    // textAlign: "center",
    // color: "white",
    // backgroundColor: "#858FBB",
    // padding: 20,
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 50,
  },
  btn: {
    backgroundColor: "#E8EFFF",
    borderRadius: 10,
  },
});

export default Dashboard;
