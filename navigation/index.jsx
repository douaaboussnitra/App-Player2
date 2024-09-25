/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme } from "@react-navigation/native";
import * as React from "react";
import Colors from "../constants/Colors";
import AdminNavigation from "./admin";
import AuthNavigation from "./auth";
import { useAuth } from "../store/auth.store";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  const { token } = useAuth();
  if (token) {
    return (
      <AdminNavigation />
    )
  } else {
    return (
      <AuthNavigation />
    )
  }
}

/** 
  Push notification : 
  we use the firebase of Google and token device of the phone 
  Message :
  soft we neet the account gmail and app password 
 */

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
