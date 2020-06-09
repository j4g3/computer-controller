import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderView, HeaderText, Wrapper } from "./style";

export default function App() {
  return (
    <Wrapper
      style={{
        flex: 1,
        backgroundColor: "#F8F7FF",
        paddingTop: Platform.OS === "android" ? 0 : 0,
      }}
    >
      <HeaderView>
        <HeaderText>Connect Computer</HeaderText>
      </HeaderView>
    </Wrapper>
  );
}
