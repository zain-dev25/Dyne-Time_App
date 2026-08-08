import { Link, useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../images/dinetimelogo.png";
import frameImage from "../../images/Frame.png";
import { Formik } from "formik";
import { authSchema } from "../../../utils/authScheema";

export default function SignUp() {
  const router = useRouter();
  const handleSignUp = () => {
    // Handle sign up logic here
  };
  const handleSignIn = () => {
    router.push("/(auth)/SignIn");
  };
  
  return (
    <>
      <SafeAreaView style={style.container}>
        {/* DineTime Logo */}
        <View>
          <Image source={Logo} style={style.logo} />
        </View>

        <View>
          <Text style={style.text}>Let's get you set up!</Text>
        </View>
        {/*  Inputs */}

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={authSchema}
          onSubmit={(handleSignUp) => {
            // router.push('/(auth)/SignIn');
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={{ marginTop: 20 }}>
              <Text style={style.text2}>Email</Text>
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor="white"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                value={values.email}
                style={style.input}
              />
              <Text style={{ color: "red", marginTop: 5 }}>
                {errors.email && touched.email && errors.email}
              </Text>

              <Text style={style.text2}>Password</Text>
              <TextInput
                placeholder="Enter Your Password"
                placeholderTextColor="white"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={style.input}
              />
              <Text style={{ color: "red", marginTop: 2 }}>
                {errors.password && touched.password && errors.password}
              </Text>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={style.signup}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSignIn}
              
              >
                <Text   style={style.alreadyAccount}>
                  Already have an account?
                  <Text style={style.signin}> Sign In</Text>{" "}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

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
            Be a{" "}
            <Link
              href="#"
              style={{
                color: "#f49b33",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              Guest User
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
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: "center",
    marginTop: 5,
  },
  text: {
    textAlign: "center",
    padding: 0,
    borderRadius: 5,
    color: "white",
    marginTop: -40,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 23,
  },
  text2: {
    textAlign: "start",
    borderColor: "#f49b33",
    padding: 10,
    borderRadius: 5,
    color: "#f49b33",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#f49b33",
    borderRadius: 5,
    color: "white",
    marginTop: 0,
    backgroundColor: "#2b2b2b",
    textAlign: "left",
    paddingLeft: 15,
  },
  button: {
    borderRadius: 5,
    marginTop: 30,
  },
  alreadyAccount: {
    textAlign: "center",
    color: "white",
    marginTop: 10,
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
    marginTop: 10,
  },
  frameImage: {
    width: 350,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    position: "absolute",
    bottom: -130,
  },
  signup: {
    color: "white",
    textAlign: "center",
    padding: 10,
    backgroundColor: "#f49b33",
    borderRadius: 5,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  signin: {
    color: "#f49b33",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
});
