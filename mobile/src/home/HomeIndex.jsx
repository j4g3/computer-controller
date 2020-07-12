import React, { useState } from "react";
import axios from "axios";
import {
  Wrapper,
  HeaderView,
  HeaderContainer,
  HeaderText,
  HeaderInput,
  MainView,
  ErrorText,
} from "./style";
import ConnectButton from "./components/button";
import ButtonPower from "./components/buttonPower";

function App() {
  const [IP, setIP] = useState("");
  const [ErrorApp, setError] = useState(false);
  const [ListOfButtons] = useState([
    "Kill Process",
    "Power Off",
    "Reboot",
    "Logout",
  ]);
  const [EndPointsOfApi] = useState([
    {
      "Kill Process": "/kill/process/all",
      "Power Off": "/shutdown",
      Reboot: "/reboot",
      Logout: "/logout",
    },
  ]);

  const RequestsOnAPI = async (url) => {
    const api = axios.create({
      baseURL: `http://${IP}:8564`,
    });

    const response = await api.get(url);
    const data = response.data;
    if (data.data != "Is running command.") {
      setError(true);
    }
  };

  const Actions = async (typeProcess) => {
    if (IP != 0) {
      switch (typeProcess) {
        case "Kill Process":
          RequestsOnAPI(EndPointsOfApi[0]["Kill Process"]);
          break;
        case "Power Off":
          RequestsOnAPI(EndPointsOfApi[0]["Power Off"]);
          break;
        case "Reboot":
          RequestsOnAPI(EndPointsOfApi[0]["Reboot"]);
          break;
        case "Logout":
          RequestsOnAPI(EndPointsOfApi[0]["Logout"]);
          break;
      }
    }
  };

  return (
    <Wrapper>
      <HeaderView>
        <HeaderText>Computer Controller</HeaderText>
        <HeaderContainer>
          <HeaderInput
            placeholder="Your computer ip"
            placeholderTextColor="#e5e5e5"
            keyboardType="numeric"
            value={IP}
            onChangeText={setIP}
          />
          <ConnectButton onPress={() => {}} />
        </HeaderContainer>
      </HeaderView>
      <MainView>
        {!ErrorApp && (
          <>
            {ListOfButtons.map((Button) => (
              <ButtonPower
                key={Button}
                text={Button}
                onPress={() => {
                  Actions(Button);
                }}
              />
            ))}
          </>
        )}
        {ErrorApp && (
          <>
            <ErrorText>Restart App and Computer Software</ErrorText>
          </>
        )}
      </MainView>
    </Wrapper>
  );
}
export default App;
