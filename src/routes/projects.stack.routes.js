import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../constants/screenOptions";

import Projects from "../pages/Projects";
import OpenRepoBrowser from "../pages/OpenRepoBrowser";

const Stack = createStackNavigator();

const ProjectsStackRoutes = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Projects" component={Projects}
        options={() => ({ title: 'Meus  Projetos' }
        )}
      />
      <Stack.Screen name="OpenRepoBrowser" component={OpenRepoBrowser}
        options={({route}) => {
          // console.log(route.params)
          return({ title: route.params.name }
        )}
      }
      />
    </Stack.Navigator>
  )
}
export default ProjectsStackRoutes;