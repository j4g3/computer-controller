import React, { useState } from "react";
import BaseRequestOfApiForTest from "./services/api";
import {
  Container,
  IpBox,
  IpText,
  IpStatusOnline,
  IpStatusOffline,
} from "./style";

const App = () => {
  const [IP, setIP] = useState("");
  const [status, setStatus] = useState(false);

  async function getIP() {
    const internalIp = require("internal-ip");

    (async () => {
      setIP(await internalIp.v4());
      //=> '10.0.0.79'
    })();
  }
  getIP();
  async function TestStatusOfApi() {
    const ResponseRequest = await BaseRequestOfApiForTest.get("/online");
    if (ResponseRequest.status === 200) {
      setStatus(true);
    }
  }
  TestStatusOfApi();

  return (
    <Container>
      <IpBox>
        <IpText>Seu IP</IpText>
        <IpText style={{ fontSize: 24 }}>{IP}:8564</IpText>
        <IpText style={{ paddingTop: 10 }}>
          Status -{status && <IpStatusOnline> Online</IpStatusOnline>}
          {!status && <IpStatusOffline> Offline</IpStatusOffline>}
        </IpText>
      </IpBox>
    </Container>
  );
};

export default App;
