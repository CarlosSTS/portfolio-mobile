import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../constants/screenOptions";

import Github from "../pages/Github";
import OpenGithub from "../pages/OpenGithub";
import FavoriteRepos from '../pages/FavoriteRepos';

const Stack = createStackNavigator();

const GithubStackRoutes = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Github" component={Github}
        options={() => ({ title: 'CarlosSTS' }
        )}
      />

      <Stack.Screen name="OpenGithub" component={OpenGithub}
        options={({ route }) => {
          return ({ title: route.params.name || route.params.stars.name }
          )
        }}
      />

      <Stack.Screen name="FavoriteRepos" component={FavoriteRepos}
        options={() => ({ title: 'Repositórios Favoritos' }
        )}
      />

    </Stack.Navigator>
  )
}
export default GithubStackRoutes;