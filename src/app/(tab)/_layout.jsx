import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const tabLayout = ({ children }) => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f49b33",
        tabBarInactiveTintColor: "#f4f4f47f",
        tabBarStyle: {
            backgroundColor:"#2b2b2b",
        },
        headerShown: true,
        headerStyle: {
            backgroundColor:"#1e1d1d",
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
