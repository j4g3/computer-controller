import styled from "styled-components";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ButtonAction = styled(TouchableWithoutFeedback)``;

export const ButtonContainer = styled(View)`
  padding: ${RFPercentage(2, "pixel")};
  border-radius: ${RFPercentage(2, "pixel")};
  background: #b8b8ff;
  margin: ${RFPercentage(0.5, "pixel")};
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-size: ${RFPercentage(3.5, "pixel")};
`;
