import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from "react-native";
import profileImage from "../images/profile.jpg"



const ProfileSection = ({userName}) => {
  return (
    <>
      <View style={style.profileSection}> 
             <Text style={style.welcome}>
               welcome! Mr <Text style={style.userName}> {userName}</Text>
             </Text>
             <View></View>
     
             <Image style={style.profile} source={profileImage} />
           </View>
    </>
  )
}

export default ProfileSection

const style = StyleSheet.create({
    profileSection:{
    // backgroundColor:"#0c0b0b",
    marginTop:-25,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"

  },
   welcome:{
    color:"#f4f4f4",
    fontStyle:"italic",
    fontSize:15
    },

  userName:{
    color:"#f49b33",
    fontSize:18
  },
    profile: {
    justifyContent: "center",
    width: 65,
    height: 65,
    borderRadius: 50,
    right:-9,
    position:"fixed"
  },
})