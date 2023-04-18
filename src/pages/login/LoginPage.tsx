import React from "react";
import { Text, View, ImageBackground } from "react-native";
import {
  LoginContainer,
  Title,
  ResisterText,
  Footer,
  FormLabel,
} from "./styles/login.styles";

import { Box, Input, Button } from "native-base";
import BackImg from "../../assets/background.png";

const LoginPage = () => {
  return (
    <LoginContainer>
      <Title>로그인</Title>

      <FormLabel>* 이메일</FormLabel>
      <Input mt={3} placeholder='이메일을 입력해 주세요.' w='100%' />
      <Box mt={5}>
        <FormLabel>* 비밀번호</FormLabel>
        <Input mt={3} placeholder='비밀번호를 입력해 주세요.' w='100%' />
      </Box>
      <Button mt={7} onPress={() => console.log("hello world")}>
        로그인
      </Button>

      <Footer>
        <ResisterText>비밀번호 찾기</ResisterText>
        <ResisterText>회원가입</ResisterText>
      </Footer>
    </LoginContainer>
  );
};

export default LoginPage;
