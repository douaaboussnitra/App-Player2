import React, { useState }  from "react";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./config/fonts";
import Navigation from "./navigation";
import { KeyboardAvoidingView, Platform} from "react-native";
import { AuthProvider } from "./store/auth.store";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <AuthProvider>
      <KeyboardAvoidingView
style={{ flex: 1 }} enabled
behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

           <Navigation /> 
  </KeyboardAvoidingView>
  </AuthProvider>
    </SafeAreaProvider>
  );
}

