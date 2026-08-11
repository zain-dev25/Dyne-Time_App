import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationBar } from "expo-navigation-bar";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tabLayout = () => {   
      console.log(Platform.OS);
//    useEffect(() => {
//     const hideAndroidButtons = async () => {
//       // Pehle check karein ke hum Android par hain aur library load hui hai
//       if (Platform.OS === 'android' && NavigationBar && typeof NavigationBar.setVisibilityAsync === 'function') {
//         try {
//           await NavigationBar.setVisibilityAsync('hidden');
//           await NavigationBar.setBehaviorAsync('sticky-immersive');
//         } catch (error) {
//           console.log("Nav bar hide karne me masla aaya:", error);
//         }
//       } else if (Platform.OS === 'android') {
//         console.warn("expo-navigation-bar ke native functions undefined hain. Rebuild lazmi hai!");
//       }
//     };

//     hideAndroidButtons();
//   }, []);
  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f49b33",
        tabBarInactiveTintColor: "#f4f4f47f",
        tabBarStyle: {backgroundColor:"#2b2b2b",},
        tabBarHideOnKeyboard:true,
        headerShown: false,
        headerStyle: {
            backgroundColor:"#2b2b2b",
        },
        headerTitleStyle: {
            color:"#f49b33",
            fontWeight:"bold",
            fontSize:25,
        },
        headerTitleAlign: "center",
        
      
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
        //   href:null,
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="clock" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default tabLayout;
