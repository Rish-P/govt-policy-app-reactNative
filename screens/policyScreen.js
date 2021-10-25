import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity,Linking } from 'react-native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import axios from 'axios'
export default function policyScreen(props){
  console.log(props)
  const policy = props.route.params.item
  const [ups, setUps] = useState(policy.upVote)
  const [downs, setDowns] = useState(policy.downVote)

  useEffect(()=>{
    axios.post('https://aadlproj.herokuapp.com/getonepolicy',{
      policyId:policy._id
    })
    .then(res=>{
      setUps(res.data.policy.upVote)
      setDowns(res.data.policy.downVote)
    })
  },[])

  const upvotePress = ()=>{
    setUps(ups+1)
    axios.post('https://aadlproj.herokuapp.com/vote',{
      policyId:policy._id,
      voteType:1
    })
  }
  const downvotePress = ()=>{
    setDowns(downs+1)
    axios.post('https://aadlproj.herokuapp.com/vote',{
      policyId:policy._id,
      voteType:0
    })
  }
  return(
      <View style={styles.container}>
      <BackButton goBack={props.navigation.goBack} />
      <Header style={{margin:20,fontSize:20,fontWeight:'bold'}}>{policy.name}</Header>
      <View>
        <Text style={{fontWeight:'bold'}}>
        
        {policy.department}
        </Text>
        <Text>About: {policy.description}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.votebutton} onPress={upvotePress}>
        <Text>
          Upvotes {ups}

        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.votebutton} onPress={downvotePress}>
        <Text>
          Down Votes {downs}

        </Text>
        </TouchableOpacity>
        <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(policy.website)}>
        Link: Read More
      </Text>
      </View>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:25
  },
  votebutton:{
    backgroundColor:'lightblue',
    padding:3,
    margin:5,
    width:120
  }
});