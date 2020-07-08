import React, { useEffect, useState } from "react";
import BaseRequestOfApiForTest from "./services/api";
import {
  Container,
  IpBox,
  IpText,
  IpStatusOnline,
  IpStatusOffline,
} from "./style";
function App() {
  const [IP, setIP] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    function ip() {
      var address,
        ifaces = require("os").networkInterfaces();
      for (var dev in ifaces) {
        ifaces[dev].filter((details) =>
          details.family === "IPv4" && details.internal === false
            ? (address = details.address)
            : undefined
        );
      }
      return address;
    }
    async function TestStatusOfApi() {
      const ResponseRequest = await BaseRequestOfApiForTest.get("/online");
      if (ResponseRequest.status === 200) {
        setStatus(true);
      }
    }
    TestStatusOfApi();
    setIP(ip());
  }, []);
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
}

export default App;
