import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import Home from "./pages/Home";

const App = () => (
  <>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </>
);

export default App;
