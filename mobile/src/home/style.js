import styled from "styled-components";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: #f8f7ff;
`;

export const HeaderView = styled(View)`
  background: #9381ff;
  padding: ${RFPercentage(2, "pixel")};
  height: ${RFPercentage(55, "pixel")};
  border-bottom-left-radius: ${RFPercentage(5, "pixel")};
  border-bottom-right-radius: ${RFPercentage(5, "pixel")};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const HeaderText = styled(Text)`
  color: #f8f7ff;
  text-align: center;
  font-size: ${RFPercentage(3.4, "pixel")};
  font-weight: bold;
`;

export const HeaderContainer = styled(View)`
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${RFPercentage(10, "pixel")};
`;

export const HeaderInput = styled(TextInput)`
  padding: ${RFPercentage(1, "pixel")};
  width: ${RFPercentage(20, "pixel")};
  border-bottom-width: 1px;
  border-bottom-color: #f8f7ff;
  text-align: left;
  font-size: ${RFPercentage(2.2, "pixel")};
  color: #f8f7ff;
`;

export const MainView = styled(View)`
  padding: ${RFPercentage(2, "pixel")};
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorText = styled(Text)`
  color: #ef233c;
  font-weight: bold;
  font-size: ${RFPercentage(2.7, "pixel")};
  text-align: center;
`;
