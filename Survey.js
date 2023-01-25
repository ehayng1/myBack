import {
  View,
  StyleSheet,
  Button,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import Survey2 from "./Survey2.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CheckBox, Icon } from "@rneui/themed";
import { SelectList } from "react-native-dropdown-select-list";
import RNPickerSelect from "react-native-picker-select";
import DropDownPicker from "react-native-dropdown-picker";

// const color = "#F4511E";
const mainColor = "#D84315";
const white = "white";
const bgColor = "#f7f3f0";
// const white = "#FBE9E7";

function Question({ navigation }) {
  // const Btn = (props) => {
  //   // console.log(props.title);
  //   const [Sharp, setSharp] = React.useState();
  //   const [Aching, setAching] = React.useState();
  //   const [Burning, setBurning] = React.useState();
  //   // arr = (Sharp, Aching, Burning);
  //   const handlePress = (e) => {
  //     // buttonClicked ? setButtonClicked(false) : setButtonClicked(true);

  //     console.log("HEY");
  //     console.dir(props);

  //     props.title === "Sharp" ? setSharp("Sharp") : setSharp(false); //if
  //     props.title === "Aching" ? setAching("Aching") : setAching(false); //else if
  //     props.title === "Burning" ? setBurning("Burning") : setBurning(false); //elif

  //     // push prop inside the data structure
  //   };
  //   return (
  //     <Pressable
  //       // onPress={() => handlePress}
  //       type="S"
  //       onPress={handlePress}
  //       // style={buttonClicked ? [styles.clicked] : styles.btnhor}
  //       style={props.title === true ? [styles.clicked] : styles.btnhor}
  //     >
  //       <Text
  //         // style={buttonClicked ? [styles.btntextWhite] : styles.btntext}
  //         style={props.title === true ? [styles.btntextWhite] : styles.btntext}
  //       >
  //         {props.title}
  //       </Text>
  //     </Pressable>
  //   );
  // };

  const [Sharp, setSharp] = React.useState();
  const [Aching, setAching] = React.useState();
  const [Burning, setBurning] = React.useState();
  const handlePressS = (e) => {
    Sharp ? setSharp(false) : setSharp(true);
    // push to the database
  };
  const handlePressB = (e) => {
    Burning ? setBurning(false) : setBurning(true);
  };
  const handlePressA = (e) => {
    Aching ? setAching(false) : setAching(true);
  };

  const [selectedIndex, setIndex] = React.useState();

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "Upper Back (Cervical)", value: "1" },
    { label: "Middle Back (Thoracic)", value: "2" },
    { label: "Lower Back (Lumbar)", value: "3" },
    { label: "Neck", value: "4" },
  ]);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    { label: "Upper Back (Cervical)", value: "1" },
    { label: "Middle Back (Thoracic)", value: "2" },
    { label: "Lower Back (Lumbar)", value: "3" },
    { label: "Neck", value: "4" },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.survey}>
            1. Do you currently have a back pain?
          </Text>
          <View style={styles.radioContainer}>
            <CheckBox
              checked={selectedIndex === 0}
              title="Yes"
              checkedColor={mainColor}
              onPress={() => setIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              textStyle={styles.radiotxt}
              containerStyle={styles.radio}
            />
            <CheckBox
              checked={selectedIndex === 1}
              title="No"
              checkedColor={mainColor}
              onPress={() => setIndex(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              textStyle={styles.radiotxt}
              containerStyle={styles.radio}
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.survey}>
            1-1. If yes, could you describe your pain?
          </Text>
          {/* OLD VERSION */}
          <View style={styles.fixToText}>
            <Pressable
              onPress={handlePressS}
              style={Sharp === true ? [styles.clicked] : styles.btnhor}
            >
              <Text
                style={Sharp === true ? [styles.btntextWhite] : styles.btntext}
              >
                Sharp
              </Text>
            </Pressable>
            <Pressable
              onPress={handlePressA}
              style={Aching === true ? [styles.clicked] : styles.btnhor}
            >
              <Text
                style={Aching === true ? [styles.btntextWhite] : styles.btntext}
              >
                Aching
              </Text>
            </Pressable>
            <Pressable
              onPress={handlePressB}
              style={Burning ? [styles.clicked] : styles.btnhor}
            >
              <Text style={Burning ? [styles.btntextWhite] : styles.btntext}>
                Burning
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.survey}>
            1-2. If yes, please describe your area of pain / discomfort.
          </Text>
          <View style={{ zIndex: 50 }}>
            <DropDownPicker
              zIndex={4000}
              zIndexInverse={1000}
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              labelStyle={{
                fontSize: 17,
                fontWeight: "700",
                color: mainColor,
              }}
              containerStyle={{
                width: "95%",
                margin: 10,
                marginTop: 15,
              }}
              setItems={setItems1}
              placeholder="Please select the area of pain / discomfort."
              listMode="MODAL"
              modalAnimationType="fade"
              modalTitle="Please select the surgical location."
              modalContentContainerStyle={{
                backgroundColor: bgColor,
              }}
              modalTitleStyle={{
                fontWeight: "bold",
                fontSize: 16,
                color: mainColor,
              }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.survey}>
            2. Have you ever had a surgery? If yes, please describe the surgical
            location.
          </Text>
          <DropDownPicker
            zIndex={1000}
            zIndexInverse={4000}
            open={open4}
            value={value4}
            items={items4}
            setOpen={setOpen4}
            setValue={setValue4}
            dropDownDirection="TOP"
            labelStyle={{
              fontSize: 17,
              fontWeight: "700",
              color: mainColor,
            }}
            containerStyle={{
              width: "95%",
              margin: 10,
              marginTop: 15,
            }}
            setItems={setItems4}
            placeholder="Please select the surgical location."
            listMode="MODAL"
            modalAnimationType="fade"
            modalTitle="Please select the surgical location."
            modalContentContainerStyle={{
              backgroundColor: bgColor,
            }}
            modalTitleStyle={{
              fontWeight: "bold",
              fontSize: 16,
              color: mainColor,
            }}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.survey}>
            3. What are you currently doing to relieve the pain?
          </Text>
          {/* <Button
        title="Next"
        color="#F4511E"
        onPress={() => navigation.navigate('Survey 2/4')}
      /> */}
        </View>

        <View style={styles.fixToText}>
          <Button
            title="Back"
            color={mainColor}
            onPress={() => navigation.navigate("Survey2")}
          />
          <Button
            title="Next"
            color={mainColor}
            onPress={() => navigation.navigate("Survey 2/4")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

// the custon survey component
const Btn = (props) => {
  const [btnIndex, setBtnIndex] = React.useState();
  const ans = new Array(10);
  const handlePress = (e) => {
    // push prop inside the data structure
  };
  ans[props.index] = btnIndex;
  // use firebase data structure here

  // console.log(ans);

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.survey}>{props.text}</Text>
        <View style={styles.fixToText}>
          <Pressable
            onPress={() => setBtnIndex(0)}
            style={btnIndex === 0 ? [styles.clicked] : styles.btnhor}
          >
            <Text
              style={btnIndex === 0 ? [styles.btntextWhite] : styles.btntext}
            >
              0
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setBtnIndex(1)}
            style={btnIndex === 1 ? [styles.clicked] : styles.btnhor}
          >
            <Text
              style={btnIndex === 1 ? [styles.btntextWhite] : styles.btntext}
            >
              1
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setBtnIndex(2)}
            style={btnIndex === 2 ? [styles.clicked] : styles.btnhor}
          >
            <Text
              style={btnIndex === 2 ? [styles.btntextWhite] : styles.btntext}
            >
              2
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setBtnIndex(3)}
            style={btnIndex === 3 ? [styles.clicked] : styles.btnhor}
          >
            <Text
              style={btnIndex === 3 ? [styles.btntextWhite] : styles.btntext}
            >
              3
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setBtnIndex(4)}
            style={btnIndex === 4 ? [styles.clicked] : styles.btnhor}
          >
            <Text
              style={btnIndex === 4 ? [styles.btntextWhite] : styles.btntext}
            >
              4
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setBtnIndex(5)}
            style={btnIndex === 5 ? [styles.clicked] : styles.btnhor}
          >
            <Text
              style={btnIndex === 5 ? [styles.btntextWhite] : styles.btntext}
            >
              5
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

function Question1({ navigation }) {
  // const Btn = (props) => {
  //   const [btnIndex, setBtnIndex] = React.useState();
  //   const handlePress = (e) => {
  //     // push prop inside the data structure
  //   };
  //   ans[props.index] = btnIndex;
  //   // use firebase data structure here

  //   // console.log(ans);

  //   return (
  //     <>
  //       <View style={styles.card}>
  //         <Text style={styles.survey}>{props.text}</Text>
  //         <View style={styles.fixToText}>
  //           <Pressable
  //             onPress={() => setBtnIndex(0)}
  //             style={btnIndex === 0 ? [styles.clicked] : styles.btnhor}
  //           >
  //             <Text
  //               style={btnIndex === 0 ? [styles.btntextWhite] : styles.btntext}
  //             >
  //               0
  //             </Text>
  //           </Pressable>
  //           <Pressable
  //             onPress={() => setBtnIndex(1)}
  //             style={btnIndex === 1 ? [styles.clicked] : styles.btnhor}
  //           >
  //             <Text
  //               style={btnIndex === 1 ? [styles.btntextWhite] : styles.btntext}
  //             >
  //               1
  //             </Text>
  //           </Pressable>
  //           <Pressable
  //             onPress={() => setBtnIndex(2)}
  //             style={btnIndex === 2 ? [styles.clicked] : styles.btnhor}
  //           >
  //             <Text
  //               style={btnIndex === 2 ? [styles.btntextWhite] : styles.btntext}
  //             >
  //               2
  //             </Text>
  //           </Pressable>
  //           <Pressable
  //             onPress={() => setBtnIndex(3)}
  //             style={btnIndex === 3 ? [styles.clicked] : styles.btnhor}
  //           >
  //             <Text
  //               style={btnIndex === 3 ? [styles.btntextWhite] : styles.btntext}
  //             >
  //               3
  //             </Text>
  //           </Pressable>
  //           <Pressable
  //             onPress={() => setBtnIndex(4)}
  //             style={btnIndex === 4 ? [styles.clicked] : styles.btnhor}
  //           >
  //             <Text
  //               style={btnIndex === 4 ? [styles.btntextWhite] : styles.btntext}
  //             >
  //               4
  //             </Text>
  //           </Pressable>
  //           <Pressable
  //             onPress={() => setBtnIndex(5)}
  //             style={btnIndex === 5 ? [styles.clicked] : styles.btnhor}
  //           >
  //             <Text
  //               style={btnIndex === 5 ? [styles.btntextWhite] : styles.btntext}
  //             >
  //               5
  //             </Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </>
  //   );
  // };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.survey}>
          For the rest of the questions, we would like to know if you find it
          difficult to perform any of the activities listed below, because of
          your back. Please choose from 0 to 5.
        </Text>
        <Btn index="6" text="6. Turn over in bed" />
        <Btn index="7" text="7. Ride in a car" />
        <Btn index="8" text="8. Sit in a chair for several hours" />
        <Btn index="9" text="9. Walk a few blocks (300-400m)" />
        <Btn index="10" text="10. Reach up to high shelves" />

        <View style={styles.fixToText}>
          <Button
            title="Back"
            color={mainColor}
            onPress={() => navigation.navigate("Survey 1/4")}
          />
          <Button
            title="Next"
            color={mainColor}
            onPress={() => navigation.navigate("Survey 3/4")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

function Question2({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Btn index="11" text="11. Throw a ball" />
        <Btn index="12" text="12. Make your bed" />
        <Btn index="13" text="13. Bend over to clean the bathtub" />
        <Btn index="14" text="14. Climb one flight of stairs" />
        <Btn index="15" text="15. Carry two bags of groceries" />

        <View style={styles.fixToText}>
          <Button
            title="Back"
            color={mainColor}
            onPress={() => navigation.navigate("Survey 2/4")}
          />
          <Button
            title="Next"
            color={mainColor}
            onPress={() => navigation.navigate("Survey 4/4")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

function Question3({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.survey}>
          14. Have you ever had a surgery? If yes, please describe the surgical
          location
        </Text>

        <Text style={styles.survey}>
          15. What are you currently doing to relieve the pain?
        </Text>
      </View>

      <View style={styles.fixToText}>
        <Button
          title="Back"
          color="#F4511E"
          onPress={() => navigation.navigate("Survey 3/4")}
        />
        <Button
          title="Submit"
          color="#F4511E"
          onPress={() => navigation.navigate("Submit")}
        />
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function Survey() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Survey 1/4" component={Question} />
      <Stack.Screen name="Survey 2/4" component={Question1} />
      <Stack.Screen
        name="Survey 3/4"
        component={Question2}
        options={{ headerBackVisible: false }}
      />
      <Stack.Screen
        name="Survey 4/4"
        component={Question3}
        options={{ headerBackVisible: false }}
      />
      {/* <Stack.Screen name="Survey2" component={Survey2} options={{ headerBackVisible: false }}/> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: ,
    paddingHorizontal: 16, // 좌우측 패딩
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    borderColor: "transparent",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
  survey: {
    fontSize: 20,
    margin: 5,
    marginTop: 20,
  },
  card: {
    marginTop: 15,
    backgroundColor: "#f7e5df",
    borderRadius: 10,
  },
  btnhor: {
    flex: 0.3,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    margin: 5,
    paddingVertical: 3,
    marginBottom: 10,
  },
  clicked: {
    flex: 0.3,
    backgroundColor: mainColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    margin: 5,
    paddingVertical: 3,
    marginBottom: 10,
  },
  btntext: {
    fontSize: 18,
    fontWeight: "600",
    color: mainColor,
    padding: 5,
  },
  btntextWhite: {
    fontSize: 18,
    fontWeight: "600",
    color: white,
    padding: 5,
  },
  radio: {
    flexDirection: "row",
    borderRadius: 10,
  },
  radiotxt: {
    fontSize: 18,
    fontWeight: "500",
  },
  radioContainer: {
    marginBottom: 10,
  },
});

export default Survey;
