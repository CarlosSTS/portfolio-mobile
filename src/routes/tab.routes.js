import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from '../common/colors'
import tabBarOptions from "../constants/tabBarOptions";

import Profile from "./profile.stack.routes";
import Projects from "./projects.stack.routes";
import Github from "./github.stack.routes";
import Contact from "./contact.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={tabBarOptions}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "account-circle" : "account-circle-outline"}
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarLabel: "Meus Projetos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "file-code" : "file-code-outline"}
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Github"
        component={Github}
        options={{
          tabBarLabel: "Github",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="github"
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contatos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name='phone-classic'
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default TabRoutes;