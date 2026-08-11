import { View, Text, StyleSheet, StatusBar, TextInput, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSection from "../../components/ProfileSection";
import { Image } from "react-native";
import HomeBarImage from "../../images/homeBanner.png";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden barStyle="dark-content" backgroundColor="#2b2b2b" />
      <ProfileSection userName="Zain ul Abedin" />
      <View style={style.inputSection}>
        <TextInput
          placeholder="Search Trendy Foods"
          placeholderTextColor="#f499327e"
          style={style.textInput}
        />
      </View>
      <ScrollView>
        <ImageBackground 
        resizeMode="cover"
        blurRadius={4}
        source={HomeBarImage}
        style={style.imageBackground}
        >
<Text style={style.text}>Dine with your loved onces.</Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
  },
  inputSection: {
    marginLeft: 6,
    marginTop: 10,
    marginBottom: 10,
    width: "auto",
    borderWidth: 1,
    borderColor: "#f49b33",
    borderRadius: 50,
    color: "white",
    margin: 4,
    textAlign: "left",
  },
  textInput: {
    color: "white",
    paddingLeft: 17,
    fontFamily: "s",
  },
  imageBackground:{
    marginTop:4,
    marginBottom:4,
    width:"auto",
    height:102,
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"red"
    
  },
  text:{
    color:"white",
    fontSize:16

  }
});
