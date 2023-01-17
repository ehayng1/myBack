import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
// import { NavigationContainer } from "@react-navigation/native";
// import Survey2 from "./Survey2.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

function Question({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        /> */}
        <Text style={styles.survey}>1. Do you feel a back pain?</Text>

        <Text style={styles.survey}>1. Do you feel a back pain?</Text>
        <Pressable
          style={styles.btnhor}
          // style={({pressed}) => [
          //   styles.btnhor,
          //   {
          //     backgroundColor: pressed ? '#F4511E' : 'white',
          //   },
          // ]}
        >
          {/* style={styles.btnhor} */}
          <Text
            style={styles.btntext}
            // style={({pressed}) => [
            //   styles.btntext,
            //   {
            //     color: pressed ? 'white' : '#F4511E',
            //     fontWeight: '700'
            //   },
            // ]}
          >
            Yes
          </Text>
        </Pressable>

        <Pressable style={styles.btnhor}>
          <Text style={styles.btntext}>No</Text>
        </Pressable>

        <Text style={styles.survey}>
          1-1. If yes, please describe your area of pain / discomfort.
        </Text>

        <Text style={styles.survey}>
          1-2. If yes, could you describe your pain?
        </Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>Sharp</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>Aching</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>Burning</Text>
          </Pressable>
        </View>

        {/* <Text style={styles.survey}>3. Please describe your level of pain.</Text>
      <View style={styles.fixToText}>
      <Pressable style={styles.btnhor}>
        <Text style={styles.btntext}>1</Text>
      </Pressable>
      <Pressable style={styles.btnhor}>
        <Text style={styles.btntext}>2</Text>
      </Pressable>
      <Pressable style={styles.btnhor}>
        <Text style={styles.btntext}>3</Text>
      </Pressable>
      <Pressable style={styles.btnhor}>
        <Text style={styles.btntext}>4</Text>
      </Pressable>
      <Pressable style={styles.btnhor}>
        <Text style={styles.btntext}>5</Text>
      </Pressable>
      </View> */}

        <Text style={styles.survey}>
          4. Have you ever had a surgery? If yes, please describe the surgical
          location
        </Text>

        {/* <Text style={styles.survey}>5. Please describe your duration of pain.</Text>   */}

        <Text style={styles.survey}>
          5. What are you currently doing to relieve the pain?
        </Text>

        {/* <Button
        title="Next"
        color="#F4511E"
        onPress={() => navigation.navigate('Survey 2/4')}
      /> */}
        <View style={styles.fixToText}>
          <Button
            title="Back"
            color="#F4511E"
            onPress={() => navigation.navigate("Survey2")}
          />
          <Button
            title="Next"
            color="#F4511E"
            onPress={() => navigation.navigate("Survey 2/4")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
function Question1({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.survey}>
          For the rest of the questions, we would like to know if you find it
          difficult to perform any of the activities listed below, because of
          your back. Please choose from 0 to 5.
        </Text>

        <Text style={styles.survey}>6. Turn over in bed</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>7. Ride in a car</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>8. Sit in a chair for several hours</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>9. Walk a few blocks (300-400m)</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>10. Reach up to high shelves</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>11. Throw a ball</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>12. Make your bed</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>13. Bend over to clean the bathtub</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>14. Climb one flight of stairs</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <Text style={styles.survey}>15. Carry two bags of groceries</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>0</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>1</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>2</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>3</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>4</Text>
          </Pressable>
          <Pressable style={styles.btnhor}>
            <Text style={styles.btntext}>5</Text>
          </Pressable>
        </View>

        <View style={styles.fixToText}>
          <Button
            title="Back"
            color="#F4511E"
            onPress={() => navigation.navigate("Survey 1/4")}
          />
          <Button
            title="Next"
            color="#F4511E"
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
        <Text style={styles.survey}>
          8. Have you ever had a surgery? If yes, please describe the surgical
          location
        </Text>

        <Text style={styles.survey}>
          9. What are you currently doing to relieve the pain?
        </Text>
      </View>

      <View style={styles.fixToText}>
        <Button
          title="Back"
          color="#F4511E"
          onPress={() => navigation.navigate("Survey 2/4")}
        />
        <Button
          title="Next"
          color="#F4511E"
          onPress={() => navigation.navigate("Survey 4/4")}
        />
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
    borderColor: "lightgrey",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  survey: {
    fontSize: 20,
    margin: 5,
    marginTop: 40,
  },
  btn: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    margin: 5,
  },
  btntext: {
    fontSize: 18,
    fontWeight: "500",
    color: "#F4511E",
    padding: 5,
  },
  pressed: {
    fontSize: 16,
    fontWeight: "500",
    color: "blue",
    padding: 5,
  },
  btnhor: {
    // flex: 1,
    flex: 0.3,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "center",
    margin: 5,
  },
});

export default Survey;
