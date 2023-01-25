import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const color = "#F4511E";

function dropdown() {
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    { label: "Upper Back(Cervical)", value: "1" },
    { label: "Middle Back(Thoracic)", value: "2" },
    { label: "Lower Back(Lumbar)", value: "3" },
    { label: "Neck", value: "4" },
  ]);
  return (
    <DropDownPicker
      zIndex={1000}
      zIndexInverse={2000}
      open={open4}
      value={value4}
      items={items4}
      setOpen={setOpen4}
      setValue={setValue4}
      labelStyle={{
        fontSize: 16,
        fontWeight: "500",
        color: color,
      }}
      containerStyle={{
        margin: 5,
        marginTop: 15,
        borderColor: color,
      }}
      setItems={setItems4}
      placeholder="Please select the surgical location."
      listMode="SCROLLVIEW"
    />
  );
}

function Analysis() {
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    { label: "Upper Back(Cervical)", value: "1" },
    { label: "Middle Back(Thoracic)", value: "2" },
    { label: "Lower Back(Lumbar)", value: "3" },
    { label: "Neck", value: "4" },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Upload your picture or video!</Text>
        <Text style={styles.head}>Back Image Anaylsis</Text>

        <Pressable style={styles.btn}>
          <Text style={styles.body}>Click to select file</Text>
        </Pressable>
        <Text style={styles.normal}>Select the region of the back pain.</Text>
        <DropDownPicker
          open={open4}
          value={value4}
          items={items4}
          setOpen={setOpen4}
          setValue={setValue4}
          labelStyle={{
            fontSize: 16,
            fontWeight: "500",
            color: color,
          }}
          containerStyle={{
            // margin: 5,
            marginBottom: 15,
            borderColor: color,
          }}
          setItems={setItems4}
          placeholder="Please select the surgical location."
          listMode="SCROLLVIEW"
        />
        <Pressable style={styles.filled}>
          <Text style={styles.btntext}>START ANALYSIS</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: ,
    paddingHorizontal: 16, // 좌우측 패딩
    borderColor: "transparent",
    textAlign: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  title: {
    marginTop: 40,
    marginBottom: 70,
    fontSize: 28,
  },
  body: {
    margin: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "#E64A19",
    padding: 15,
    fontSize: 20,
    fontWeight: "500",
  },
  btn: {
    backgroundColor: "#FFCCBC",
    borderRadius: 10,
  },
  head: {
    color: color,
    fontWeight: "700",
    fontSize: 28,
    marginBottom: 40,
  },
  normal: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },

  filled: {
    marginTop: 60,
    flex: 0.3,
    backgroundColor: color,
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "center",
    margin: 5,
  },
  btntext: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    padding: 5,
  },
});

export default Analysis;
