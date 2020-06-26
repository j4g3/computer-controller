import React from "react";
import { useState } from "react-native";
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
import ButtonPower from "./components/buttonPower";

export default function App() {
  const [setPower, Power] = useState(false);
  const [setLogout, Logout] = useState(false);

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
        <ButtonPower text="Kill Process" />
        <ButtonPower text="PowerOff" />
        <ButtonPower text="Reboot" />
        <ButtonPower text="Logout" />
      </MainView>
    </Wrapper>
  );
}
