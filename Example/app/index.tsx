import React from "react";
import { AnimatedDrawerSceneWrapper } from "expo-drawer";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "@/src/screens/HomeScreen";

const Home = () => {
  return (
    <AnimatedDrawerSceneWrapper
      RightComponent={() => (
        <MaterialIcons name="notifications" size={28} color="#007AFF" />
      )}
      onRightPress={() => alert("Right !")}
      headerTitle="Home"
    >
      <HomeScreen />
    </AnimatedDrawerSceneWrapper>
  );
};

export default Home;
