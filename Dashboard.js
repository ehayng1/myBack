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
import { Divider } from "@rneui/themed";
import { ListItem, Icon } from "react-native-elements";
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
const color = "#E64A19";
const list = [
  {
    title: "Goal",
    icon: "bullseye-arrow",
    type: "material-community",
  },
  {
    title: "My Routine",
    icon: "calendar-arrow-right",
    type: "material-community",
  },
  {
    title: "Progress",
    icon: "chart-timeline-variant-shimmer",
    type: "material-community",
  },
  {
    title: "Log Out",
    icon: "logout-variant",
    type: "material-community",
  },
];

function Dashboard() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.title}>This is our Dashboard!</Text>
        <View>
          <Text style={styles.body}>
            <MaterialCommunityIcons
              name="bullseye-arrow"
              color="#E64A19"
              size="30"
            />
            Goal
          </Text>
          <Divider width={2} />
          <Text style={styles.body}>
            <MaterialCommunityIcons
              name="calendar-arrow-right"
              color="#E64A19"
              size="30"
            />
            My Routine
          </Text>
          <Divider width={2} />
          <Text style={styles.body}>
            <MaterialCommunityIcons
              name="chart-timeline-variant-shimmer"
              color="#E64A19"
              size="30"
            />
            Progress
          </Text>
          <Divider width={2} />
          <Text style={styles.body}>
            <MaterialCommunityIcons
              name="logout-variant"
              color="#E64A19"
              size="30"
            />
            Log Out
          </Text>
          <Divider width={2} />
        </View> */}
        <Text style={styles.title}>This is our Dashboard!</Text>

        <View>
          {list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} color="#E64A19" type={item.type} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: ,
    paddingHorizontal: 16, // 좌우측 패딩
    textAlign: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
  },
  body: {
    // paddingHorizontal: 16, // 좌우측 패딩
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 10,
    color: "#202C39",
    // paddingLeft: 10,
  },
  title: {
    // margin: 40,
    // textAlign: "center",
    // color: "white",
    // backgroundColor: "#858FBB",
    // padding: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 50,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#E8EFFF",
    borderRadius: 10,
  },
});

export default Dashboard;
