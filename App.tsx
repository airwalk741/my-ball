import React, { useCallback, useEffect, useState } from "react";
import { Text, ImageBackground, Dimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import LoginPage from "./src/pages/login/LoginPage";
import styled from "styled-components/native";

import { NativeBaseProvider, Box } from "native-base";

import BackImg from "./src/assets/background.png";

SplashScreen.preventAutoHideAsync();

const fontAwait = (fonts: any) =>
  fonts.map((item: any) => Font.loadAsync(item));

const Container = styled.View`
  flex: 1;
  padding: 50px 0;
  justify-content: center;
  /* background-color: #f7f3f3; */
  align-items: center;
`;

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fontList = fontAwait([Ionicons.font]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <NativeBaseProvider>
      <Container onLayout={onLayoutRootView}>
        <LoginPage />
      </Container>
      <ImageBackground
        source={BackImg}
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
          width: windowWidth,
          height: windowHeight,
          zIndex: -1,
        }}
      ></ImageBackground>
    </NativeBaseProvider>
  );
}
