import React from "react";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

// Define the type for a single drawer item
export type DrawerItem = {
  name: string;
  drawerLabel: string;
  title?: string;
  leftIcon?: string;
  leftIconFamily?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconFamily?: string;
  rightIconSize?: number;
  rightIconColor?: string;
  onPress?: () => void;
};

// Define the props for the DrawerContent component
export type DrawerContentProps = {
  drawerItems: DrawerItem[];
  drawerWidth?: number | string;
  navigation?: any;
  showUserInfo?: boolean;
  userInfo?: {
    name?: string;
    email?: string;
    imageLink?: string;
  };
  BottomComponent?: React.ComponentType;
  TopComponent?: React.ComponentType;
  userImageStyle?: StyleProp<ImageStyle>;
  userNameStyle?: StyleProp<TextStyle>;
  userEmailStyle?: StyleProp<TextStyle>;
  menuItemContainerStyle?: StyleProp<ViewStyle>;
  menuItemContainerContentStyle?: StyleProp<ViewStyle>;
  menuItemStyle?: StyleProp<ViewStyle>;
  menuTextStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  safeAreaBackgroundColor?: string;
  drawerBackgroundColor?: string;
  drawerHideStatusBarOnOpen?: boolean;
  menuItemSelectedBackgroundColor?: string;
  menuItemSelectedTextColor?: string;
  menuItemSelectedIconColor?: string;
  menuItemUnselectedBackgroundColor?: string;
  menuItemUnselectedTextColor?: string;
  menuItemUnselectedIconColor?: string;
};

import { ReactNode } from "react";

export interface AnimatedDrawerSceneWrapperProps {
  headerTitle?: string;
  leftPressDisable?: boolean;
  rightPressDisable?: boolean;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIcon?: string; // Icon name
  leftIconFamily?: string; // Icon family, e.g., "FontAwesome"
  leftIconSize?: number;
  leftIconColor?: string;
  leftIconStyle?: object;
  rightIcon?: string; // Icon name
  rightIconFamily?: string; // Icon family
  rightIconSize?: number;
  rightIconColor?: string;
  rightIconStyle?: object;
  LeftComponent?: React.ComponentType; // Custom component for the left
  RightComponent?: React.ComponentType; // Custom component for the right
  screenSizeWhenOpenDrawer?: number;
  animation?: "perspective" | "no-perspective" | "top-tilt" | "bottom-tilt";
  headerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode; // Content of the wrapper
}
