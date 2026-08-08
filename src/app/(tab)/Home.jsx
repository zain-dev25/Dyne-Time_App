import { View, Text } from 'react-native'
import React from 'react'
import {  useRouter } from 'expo-router'

const Home = () => {
  const router = useRouter();
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text onPress={() => router.push("/")} style={{fontSize:20, fontWeight:'bold', color:'#f49b33'}}>
        Go to main page
      </Text>
    </View>
  )
}

export default Home