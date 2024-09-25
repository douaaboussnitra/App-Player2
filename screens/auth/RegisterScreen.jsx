import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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


const RegisterScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkedError, setCheckedError] = useState({ email: false, password: false, confirmPassword: false });
  const handleLogin = async () => {
    setCheckedError({ email: false, password: false, confirmPassword: false });
    // get users
    var users_ = await retrieveData("users");
    // check  if the password is the same confirm password
    if (password != confirmPassword) {
      setCheckedError({ ...checkedError, confirmPassword: true });
      return false;
    }
    setCheckedError({ ...checkedError, email: users_.find(u => u.email === email) !== undefined })
    if (checkedError.email) return false;
    // get User  and push to auth_user
    users_.push({
      email,
      password
    })
    await storeData("users", users_);
    navigate("Login");

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
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" value={email} onChangeText={(val) => setEmail(val)} />
          {checkedError?.email && <Text style={styles.error} >L'ADRESSE MAIL EXISTE DÉJÀ</Text>}
          <AppTextInput placeholder="Password" value={password} onChangeText={(val) => setPassword(val)} />
          <AppTextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={(val) => setConfirmPassword(val)} />
          {checkedError?.confirmPassword && <Text style={styles.error} >LE MOT DE PASSE INCORRECTE</Text>}
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
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Login")}
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
            Already have an account
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

export default RegisterScreen;
const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 20,
  }
});