import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


const LoadingScreen = ()=>{
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
