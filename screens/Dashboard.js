import React,{useEffect, useState} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import axios from 'axios'
import {ListItem, Avatar} from 'react-native-elements'



export default function Dashboard({ navigation }) {

  const [policies,setPolicies] = useState([])
  useEffect(()=>{

    axios.post('https://aadlproj.herokuapp.com/getpolicy')
    .then(res=>{
      console.log(res.data.policies)
      setPolicies(res.data.policies)
    })
    .catch(err=>console.log(err))

  },[])
  return (
    <ScrollView style={{margin:10}}>
      <View style={{margin:50}}>
        <Text>Govt Policies</Text>
      </View>
      <View style={styles.card}>
      {
        policies.map((l) => (
          <ListItem key={l._id} bottomDivider onPress={
            ()=>{
              console.log(l)
              navigation.push('PolicyScreen',{item:l})
            }
          }>
            <Avatar source={{uri: l.img}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  card:{
    backgroundColor:'lightblue',
    padding:10,
    margin:10,
  },
  container:{
    margin:20,
    padding:10,
  }
})
