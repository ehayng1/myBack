import React from 'react';
import {View, StyleSheet, Button, Text, Pressable, ScrollView} from 'react-native';
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Question1({navigation}){

  return (
    <ScrollView>
      <View style={styles.container}>

      <Text style={styles.survey}>For the rest of the questions, we would like to know if you find it difficult to perform any of the activities listed below, because of your back. Please choose from 0 to 5.</Text>

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
          onPress={() => navigation.navigate('Survey 1/4')}
        />
        <Button
          title="Next"
          color="#F4511E"
          onPress={() => navigation.navigate('Survey 3/4')}
        />
        </View>

      </View>
    </ScrollView>)
}

const Stack = createNativeStackNavigator();

function Survey(){
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Survey" component={Question1} options={{ headerBackVisible: false }}/>
        {/* <Stack.Screen name="Survey2" component={Question1} /> */}
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: ,
    paddingHorizontal: 16, // 좌우측 패딩
    borderColor: 'lightgrey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  survey: {
    fontSize:20,
    margin: 5,
    marginTop: 40
  },
  btn: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
  },
  btntext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F4511E',
    padding: 5
  },
  pressed: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
    padding: 5
  },
  btnhor: {
    flex: 0.3,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 7,
    justifyContent: 'center',
    margin: 5,
  }
});

export default Survey;

