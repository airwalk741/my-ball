import styled from "styled-components/native";
export const LoginContainer = styled.View`
  flex: 0.68;
  border: 1px solid #ccc;
  margin: 2px 0;
  border-radius: 10px;
  /* box-shadow: 0 0 10px #ccc; */
  height: 200px;
  // execute a specific style based on the props
  /* background-color: "red"; */
  width: 80%;
  padding: 30px;
  justify-content: center;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 20px;
`;

export const FormLabel = styled.Text`
  opacity: 0.8;
  /* font-weight: 5; */
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ResisterText = styled.Text`
  font-size: 13px;
  opacity: 0.5;
`;
