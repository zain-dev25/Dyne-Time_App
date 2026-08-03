import { useRouter } from "expo-router";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "lightgray" }}
          onPress={() => router.push("/testing")}
        >
          {" "}
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
