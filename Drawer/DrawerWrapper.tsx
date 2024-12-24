import { StyleSheet, Platform, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { AppHeader } from "expo-header";
import { AnimatedDrawerSceneWrapperProps } from "./type";

export const AnimatedDrawerSceneWrapper = ({
  headerTitle,
  leftPressDisable,
  rightPressDisable,
  onLeftPress,
  onRightPress,
  leftIcon,
  leftIconFamily,
  leftIconSize,
  leftIconColor,
  leftIconStyle,
  rightIcon,
  rightIconFamily,
  rightIconSize,
  rightIconColor,
  rightIconStyle,
  LeftComponent,
  RightComponent,
  screenSizeWhenOpenDrawer = 0.8,
  animation,
  headerStyle,
  children,
}: AnimatedDrawerSceneWrapperProps) => {
  const progress = useDrawerProgress();
  const { width } = useWindowDimensions();

  const perspective = useAnimatedStyle(() => ({
    transform: [
      { perspective: Platform.OS === "ios" ? 400 : 500 },
      {
        scale: interpolate(
          progress.value,
          [0, 0.5, 1],
          [1, 0.9, screenSizeWhenOpenDrawer],
          "clamp"
        ),
      },
      {
        rotateY: `${interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, -5, -10],
          "clamp"
        )}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, width * 0.3, width * 0.6],
          "clamp"
        ),
      },
    ],
    borderRadius: interpolate(
      progress.value,
      [0, 0.5, 1],
      [0, 10, 20],
      "clamp"
    ),
    overflow: "hidden",
  }));

  const noPerspective = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 0.5, 1],
          [1, 0.9, screenSizeWhenOpenDrawer],
          "clamp"
        ),
      },

      {
        translateX: interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, width * 0.3, width * 0.6],
          "clamp"
        ),
      },
    ],
    borderRadius: interpolate(
      progress.value,
      [0, 0.5, 1],
      [0, 10, 20],
      "clamp"
    ),
    overflow: "hidden",
  }));

  const topTilt = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 0.5, 1],
          [1, 0.9, screenSizeWhenOpenDrawer],
          "clamp"
        ),
      },
      {
        rotate: `${interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, 5, 10],
          "clamp"
        )}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, width * 0.3, width * 0.6],
          "clamp"
        ),
      },
    ],
    borderRadius: interpolate(
      progress.value,
      [0, 0.5, 1],
      [0, 10, 20],
      "clamp"
    ),
  }));

  const bottomTilt = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 0.5, 1],
          [1, 0.95, screenSizeWhenOpenDrawer],
          "clamp"
        ),
      },
      {
        rotate: `${interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, -3, -7],
          "clamp"
        )}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, width * 0.3, width * 0.6],
          "clamp"
        ),
      },
    ],
    borderRadius: interpolate(
      progress.value,
      [0, 0.5, 1],
      [0, 10, 20],
      "clamp"
    ),
  }));

  const animatedStyle =
    animation === "perspective"
      ? perspective
      : animation === "no-perspective"
      ? noPerspective
      : animation === "bottom-tilt"
      ? bottomTilt
      : animation === "top-tilt"
      ? topTilt
      : perspective;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <AppHeader
        leftPressDisable={leftPressDisable}
        rightPressDisable={rightPressDisable}
        headerTitle={headerTitle}
        onLeftPress={onLeftPress}
        onRightPress={onRightPress}
        leftIcon={leftIcon}
        leftIconFamily={leftIconFamily}
        leftIconSize={leftIconSize}
        leftIconColor={leftIconColor}
        leftIconStyle={leftIconStyle}
        rightIcon={rightIcon}
        rightIconFamily={rightIconFamily}
        rightIconSize={rightIconSize}
        rightIconColor={rightIconColor}
        rightIconStyle={rightIconStyle}
        LeftComponent={LeftComponent}
        RightComponent={RightComponent}
        headerStyle={headerStyle}
      />
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10, // For Android
  },
});
