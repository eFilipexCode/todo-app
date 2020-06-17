import React from 'react';
import Routes from './src/routes';
import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { FrancoisOne_400Regular } from '@expo-google-fonts/francois-one';
import { AppLoading } from 'expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    FrancoisOne_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  };

  return (
    <Routes />
  );
};