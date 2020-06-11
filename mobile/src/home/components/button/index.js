import React from "react";
import { ConnectContainer, ConnectTitle } from "./style";
import { TouchableWithoutFeedback } from "react-native";

export default function ConnectButtom({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ConnectContainer>
        <ConnectTitle>Connect</ConnectTitle>
      </ConnectContainer>
    </TouchableWithoutFeedback>
  );
}
