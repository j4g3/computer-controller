import styled from "styled-components";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ConnectContainer = styled(View)`
  padding: ${RFPercentage(1, "pixel")};
  border-radius: 10px;
  background-color: #b8b8ff;
`;
export const ConnectTitle = styled(Text)`
  color: #fff;
`;
