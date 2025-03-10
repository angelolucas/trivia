/* eslint-disable camelcase */
import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import { useFonts, DoHyeon_400Regular } from '@expo-google-fonts/do-hyeon';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Results from './screens/Results';
import theme from './theme';

const Stack = createStackNavigator();

const App = () => {
  const dark = useColorScheme() === 'dark';
  const [fontsLoaded] = useFonts({
    DoHyeon_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme(dark)}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" title="teste" component={Home} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
