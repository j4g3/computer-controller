import styled from "styled-components";
import { SafeAreaView, Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Wrapper = styled(SafeAreaView)`
  padding-top: ${Platform.OS === "android" ? 25 : 0}px;
`;
export const HeaderText = styled(Text)`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: ${RFPercentage(2.5)}px;
  font-weight: bold;
`;
export const HeaderView = styled(View)`
  background: #9381ff;
  padding: ${RFPercentage(2)}px;
`;
