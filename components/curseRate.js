import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Rate(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={()=> {props.navigation.navigate("Value", {name: props.rate.cc}, {curseKey: props.rate})}}>
      <Text style={styles.paragraph}>
        {props.rate.txt} - {props.rate.rate}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 4,
    marginHorizontal: 20,
    padding: 7,
    backgroundColor: "greenyellow",
    borderRadius: 10,
    textAlign: "center"
  },
  paragraph: {
    margin: 5,
    marginTop: 0,
    fontSize: 13,
    fontWeight: "bold"
  },
});
