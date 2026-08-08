import { Link, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../images/dinetimelogo.png";
import frameImage from "../images/Frame.png";

export default function HomeScreen() {
   
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={style.container}>
        {/* DineTime Logo */}
        <View>
          <Image source={Logo} style={style.logo} />
        </View>

        {/*  Buttons */}
        <View>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/SignUp")}
          style={style.button}
          >
            <Text style={style.text}> Sing up</Text>
          </TouchableOpacity>

          
          <TouchableOpacity
            onPress={() => router.push("/(tab)/Home")}
          >
            <Text style={style.text2}> Guest User</Text>
          </TouchableOpacity>
        </View>

        {/* OR */}
        <View style={style.orSection}>
          <Text style={style.whiteSpace}> </Text>
          <Text style={style.orText}>OR</Text>
          <Text style={style.whiteSpace}> </Text>
        </View>

        {/* Already have an account? */}
        <View>
          <Text style={style.alreadyAccount}>
            {" "}
            Already have an account?{" "}
            <Link
              href="/(auth)/SignIn"
              style={{ color: "#f49b33", fontWeight: "bold" }}
            >
              Log in
            </Link>
          </Text>
        </View>

        {/* Frame Image */}
        <View>
          <Image source={frameImage} style={style.frameImage} />
        </View>

      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    marging: 20,
    padding: 20,
  },
  logo: {
    width: 350,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    textAlign: "center",
    backgroundColor: "#f49b33",
    padding: 10,
    borderRadius: 5,
    color: "black",
    marginTop: 20,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  text2: {
    textAlign: "center",
    borderColor: "#f49b33",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    color: "#f49b33",
    marginTop: 20,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    marginTop: 40,
  },
  alreadyAccount: {
    textAlign: "center",
    color: "white",
    marginTop: 20,
    fontSize: 16,
  },
  whiteSpace: {
    borderColor: "#f49b33",
    borderBottomWidth: 2,
    width: 100,
  },
  orText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  orSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  frameImage: {
    width: 350,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
  },
});
