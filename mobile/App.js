import React from "react";
import { StatusBar } from "react-native";
import StatusBarIos from "./src/components/GeneralStatusBar";
import Home from "./src/home/HomeIndex.jsx";

export default function App() {
  return (
    <>
      {Platform.OS === "android" ? (
        <StatusBar barStyle="light-content" backgroundColor="#9381ff" />
      ) : (
        <StatusBarIos barStyle="light-content" backgroundColor="#9381ff" />
      )}
      <Home />
    </>
  );
}
