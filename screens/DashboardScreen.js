import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const DashboardScreen = ()=>{
  return(
      <View style={styles.container}>
      
        <Text>DashboardScreen</Text>
        <Button title="Sign out"/>
      </View>
    );
  }

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
