import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('ComponentScreen')}>
      <Text>
        Navigate to Component Screen
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}  onPress = {() => navigation.navigate('ListScreen')}>
      <Text>
        Navigate to List Screen
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress = {() => navigation.navigate('ImageScreen')}>
      <Text>
        Navigate to Image Screen
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress = {() => navigation.navigate('CounterScreen')}>
      <Text>
        Navigate to Counter Screen
      </Text>
    </TouchableOpacity>
    {/* <Button style={styles.buttonMargin} title="Navigate to Component Screen"
      onPress = {() => navigation.navigate('ComponentScreen')}/>
    <Button style={styles.buttonMargin} title="Navigate to List Screen"
    onPress = {() => navigation.navigate('ListScreen')}/>
    <Button style={styles.buttonMargin} title="Navigate to List Screen"
    onPress = {() => navigation.navigate('ListScreen')}/> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  }
});

export default HomeScreen;
