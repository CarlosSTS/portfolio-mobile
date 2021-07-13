import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../constants/screenOptions";

import Profile from "../pages/Profile";

const Stack = createStackNavigator();

const ProfileStackRoutes = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Profile" component={Profile}
        options={() => ({ title: 'Sobre Mim' }
        )}
      />
    </Stack.Navigator>
  )
}
export default ProfileStackRoutes;