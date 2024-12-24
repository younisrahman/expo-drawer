# expo-drawer

`expo-drawer` is a flexible and customizable drawer navigation library for React Native and Expo projects. It provides seamless animations and enhanced drawer functionality for building modern and interactive user interfaces.

---

## Installation

Install the package using npm or yarn:

```bash
npm install expo-drawer
# or
yarn add expo-drawer
```

## Features

- **Animated Drawer**: Smooth and configurable animations for the drawer.
- **Header Customization**: Support for customizable headers with icons and actions.
- **Flexible Drawer Content**: Easily add items, user information, and custom components.
- **TypeScript Support**: Fully typed props for better developer experience.

---

## Usage

### 1. Wrapping Screens with `AnimatedDrawerSceneWrapper`

Use the `AnimatedDrawerSceneWrapper` to wrap individual screens and customize the header content.

#### Example:

```tsx
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
      onRightPress={() => alert("Right!")}
      headerTitle="Home"
    >
      <HomeScreen />
    </AnimatedDrawerSceneWrapper>
  );
};

export default Home;
```

### Props for `AnimatedDrawerSceneWrapper`

```typescript
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
  LeftComponent?: React.ComponentType;
  RightComponent?: React.ComponentType;
  screenSizeWhenOpenDrawer?: number;
  animation?: "perspective" | "no-perspective" | "top-tilt" | "bottom-tilt";
  headerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
```

---

### 2. Implementing the Drawer with `AnimatedDrawer`

The `AnimatedDrawer` component provides the main drawer functionality with customization options for the design and behavior.

#### Example:

```tsx
import React from "react";
import { AnimatedDrawer } from "expo-drawer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const Layout = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const drawerItems = [
    {
      name: "index",
      drawerLabel: "Home",
      title: "Overview",
      leftIcon: "home",
      leftIconFamily: "Entypo",
      leftIconSize: 20,
      leftIconColor: "black",
      onPress: () => navigation.navigate("index"),
    },
    {
      name: "about",
      drawerLabel: "About",
      title: "About",
      leftIcon: "contacts",
      leftIconFamily: "MaterialIcons",
      leftIconSize: 20,
      leftIconColor: "black",
    },
    {
      name: "contact",
      drawerLabel: "Contact",
      title: "Contact",
      leftIcon: "users",
      leftIconFamily: "FontAwesome",
      leftIconSize: 20,
      leftIconColor: "black",
    },
  ];

  return (
    <AnimatedDrawer
      drawerWidth="60%"
      drawerItems={drawerItems}
      drawerBackgroundColor="#73b2df"
      menuItemSelectedBackgroundColor="#4A90D9"
      menuItemSelectedTextColor="#FFFFFF"
      menuItemSelectedIconColor="#FFFFFF"
      menuItemUnselectedBackgroundColor="#D9EAF7"
      menuItemUnselectedTextColor="#2F5D80"
      menuItemUnselectedIconColor="#2F5D80"
      BottomComponent={() => (
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 10,
            marginVertical: 7,
            padding: 17,
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#1a3950",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Layout;
```

### Props for `AnimatedDrawer`

```typescript
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
```

---

## API Reference

### Components

#### `AnimatedDrawer`

A customizable drawer component with animated interactions and detailed configuration options.

#### `AnimatedDrawerSceneWrapper`

A wrapper component for screens that provides header customization and enhanced functionality.

### Props

#### `AnimatedDrawerSceneWrapperProps`

- `headerTitle`: A string for the header title.
- `leftPressDisable`: Disable left button press.(Header)
- `rightPressDisable`: Disable right button press.(Header)
- `onLeftPress`: Callback for left button press.(Header)
- `onRightPress`: Callback for right button press.(Header)
- `leftIcon`: Icon name for the left button.(Header)
- `leftIconFamily`: Icon family for the left button.(Header)
- `leftIconSize`: Size of the left button icon.(Header)
- `leftIconColor`: Color of the left button icon.(Header)
- `leftIconStyle`: Style for the left button icon.(Header)
- `rightIcon`: Icon name for the right button.(Header)
- `rightIconFamily`: Icon family for the right button.(Header)
- `rightIconSize`: Size of the right button icon.(Header)
- `rightIconColor`: Color of the right button icon.(Header)
- `rightIconStyle`: Style for the right button icon.(Header)
- `LeftComponent` and `RightComponent`: Custom components for the header.(Header)
- `screenSizeWhenOpenDrawer`: Size of the screen when the drawer is open. default value 0.8 ot of 1.0
- `animation`: The type of drawer animation. Options: `"perspective"`, `"no-perspective"`, `"top-tilt"`, `"bottom-tilt"`. Default :"perspective"
- `headerStyle`: Styling for the header.(Header)

#### `DrawerContentProps`

- `drawerItems`: An array of drawer item configurations.
- `drawerWidth`: Width of the drawer.
- `showUserInfo`: Boolean to show user info.(Default Style)
- `userInfo`: Object containing `name`, `email`, and `imageLink` for user information.(Default Style)
- `BottomComponent`: A component to render at the bottom of the drawer.
- `TopComponent`: A component to render at the top of the drawer in the UserInfo Location.
- `userImageStyle`: Styling for the user image.
- `userNameStyle`: Styling for the user name.
- `userEmailStyle`: Styling for the user email.
- `menuItemContainerStyle`: Styling for the menu item container.
- `menuItemContainerContentStyle`: Styling for the content within the menu item container.
- `menuItemStyle`: Styling for individual menu items.
- `menuTextStyle`: Styling for the menu item text.
- `iconStyle`: Styling for menu item icons.
- `safeAreaBackgroundColor`: Background color for safe areas.
- `drawerBackgroundColor`: Background color for the drawer.
- `drawerHideStatusBarOnOpen`: Boolean to hide the status bar when the drawer is open.
- `menuItemSelectedBackgroundColor`: Background color for selected menu items.
- `menuItemSelectedTextColor`: Text color for selected menu items.
- `menuItemSelectedIconColor`: Icon color for selected menu items.
- `menuItemUnselectedBackgroundColor`: Background color for unselected menu items.
- `menuItemUnselectedTextColor`: Text color for unselected menu items.
- `menuItemUnselectedIconColor`: Icon color for unselected menu items.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to help improve the package.

---

## Author

Developed by [Younis Rahman](https://github.com/younisrahman).

## Prerequisite packages most of them are default and come with Expo

- react-native-reanimated
- @react-navigation/drawer
- expo-router/drawer
- react-native-gesture-handler
- @react-navigation/drawer
- @react-navigation/native
- expo-header
- @react-navigation/drawer
- @expo/vector-icons
