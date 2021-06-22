import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export default function AppLoader() {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
});
