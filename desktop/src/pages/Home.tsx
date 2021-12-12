import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../utils/api";

interface InternalIpRequest {
  internal_ip: string;
}

const Home: React.FC = () => {
  const [ip, setIP] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const response = await api.get<InternalIpRequest>("/");
      setIP(response.data.internal_ip);
    })();
  });

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="purple.500"
      color="white"
    >
      {ip}:{3333}
    </Flex>
  );
};

export default Home;
