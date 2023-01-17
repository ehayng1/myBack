import React from 'react';
import {View, StyleSheet, TextInput, Text, Pressable, ScrollView} from 'react-native';
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

function Home() {
    
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Hello User, {"\n"}Welcome to the Back Balancer!</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: ,
    paddingHorizontal: 16, // 좌우측 패딩
    // borderColor: 'lightgrey',
    textAlign: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  title: {
    marginTop: 40,
    marginBottom: 200,
    fontSize: 20,
    textAlign: 'center',
  },
  body: {
    margin: 40,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#858FBB',
    padding: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  btn: {
    backgroundColor: '#E8EFFF',
    borderRadius: 10
  }
});

export default Home;

