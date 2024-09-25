import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import AppTextInput from "../../components/AppTextInput";
import { retrieveData, storeData } from "../../components/utils/utils";
import { useAuth } from "../../store/auth.store";


const LoginScreen = ({ navigation: { navigate } }) => {
  const { setToken } = useAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [checkedError, setCheckedError] = useState({ email: false, password: false });
  const handleLogin = async () => {
    setCheckedError({ email: false, password: false });
    // get users
    var users_ = await retrieveData("users");
    // check 
    if (!users_ || users_.length == 0) {
      setCheckedError({ ...checkedError, email: true });
      return false;
    }
    setCheckedError({ ...checkedError, email: users_.find(u => u.email === email) == undefined })
    if (checkedError.email) return false;
    setCheckedError({ ...checkedError, email: users_.find(u => u.email === email && u.password === password) == undefined })
    if (checkedError.password) return false;
    if (!checkedError.email && !checkedError.password) {
      // get User  and push to auth_user
      auth = users_.find(u => u.email === email && u.password === password);
      await storeData("auth", auth);
      setToken(auth);
    }
  }
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" value={email} onChangeText={(val) => setEmail(val)} />
          {checkedError?.email && <Text style={styles.error} >ADRESSE E-MAIL INCORRECTE</Text>}
          <AppTextInput placeholder="Password" value={password} onChangeText={(val) => setPassword(val)} />
          {checkedError?.password && <Text style={styles.error} >MOT DE PASSE EST INCORRECTE</Text>}
        </View>

        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Register")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        {/* <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

        
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 20,
  }
});
