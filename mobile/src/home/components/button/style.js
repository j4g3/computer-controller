import styled from "styled-components";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ConnectContainer = styled(View)`
  padding: ${RFPercentage(2, "pixel")};
  border-radius: ${RFPercentage(1, "pixel")};
  background-color: #b8b8ff;
  margin-left: ${RFPercentage(2, "pixel")};
`;
export const ConnectTitle = styled(Text)`
  color: #fff;
  font-size: ${RFPercentage(2, "pixel")};
`;
