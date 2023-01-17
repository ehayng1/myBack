// import React from 'react';
// import {View, StyleSheet, TextInput, Text, Pressable} from 'react-native';

// function analysis() {
//     return (
//         <View style={styles.container}>
//             <Text>Upload your picture of video for posture analysis!</Text>
//         </View>
//     );   
// }

// const styles = StyleSheet.create({
//     container: {
//       textAlign: 'center',
//       justifyContent: 'center',
//       fontSize: 25,
//   },
  
// });

// export default analysis;

import React from 'react';
import {View, StyleSheet, TextInput, Text, Pressable, ScrollView} from 'react-native';
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

function Analysis() {
    
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Upload your picture or video!</Text>

      <Pressable style={styles.btn}>
        <Text style={styles.body}>Click to select file</Text>
        </Pressable>
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
    fontSize: 28
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

export default Analysis;

