import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../constants/screenOptions";

import Contact from "../pages/Contact";

const Stack = createStackNavigator();

const ContactStackRoutes = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Contact" component={Contact}
        options={() => ({ title: 'Como me encontrar ?' }
        )}
      />
    </Stack.Navigator>
  )
}
export default ContactStackRoutes;