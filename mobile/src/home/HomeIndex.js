import React from "react";
import {
  Wrapper,
  HeaderView,
  HeaderContainer,
  HeaderText,
  HeaderInput,
  MainView,
  MainText,
  Connect,
} from "./style";
import ConnectButton from "./components/button";

export default function App() {
  return (
    <Wrapper>
      <HeaderView>
        <HeaderText>Connect Computer</HeaderText>
        <HeaderContainer>
          <HeaderInput
            placeholder="Computer IP"
            placeholderTextColor="#fcfcfc"
          />
          <ConnectButton />
        </HeaderContainer>
      </HeaderView>
      <MainView>
        <MainText></MainText>
      </MainView>
    </Wrapper>
  );
}
