import React from "react";
import { StatusBar } from "react-native";
import Home from "./src/home/index";

export default function App() {
  return (
    <>
      {Platform.OS === "android" ? (
        <StatusBar barStyle="light-content" backgroundColor="#9381ff" />
      ) : (
        <StatusBar barStyle="dark-content" backgroundColor="#9381ff" />
      )}

      <Home />
    </>
  );
}
