import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DimensionValue, SafeAreaView } from "react-native";
import { useCallback } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import { DrawerContentProps } from "./type";

export function AnimatedDrawer({
  drawerItems,
  drawerWidth,
  BottomComponent,
  TopComponent,
  showUserInfo,
  userInfo,
  userImageStyle,
  userNameStyle,
  userEmailStyle,
  menuItemContainerStyle,
  menuItemContainerContentStyle,
  menuItemStyle,
  menuTextStyle,
  iconStyle,
  safeAreaBackgroundColor = "#fff",
  drawerBackgroundColor = "#8a95f8",
  drawerHideStatusBarOnOpen = false,
  menuItemSelectedBackgroundColor = "#4A90D9",
  menuItemSelectedTextColor = "#FFFFFF",
  menuItemSelectedIconColor = "#FFFFFF",
  menuItemUnselectedBackgroundColor = "#D9EAF7",
  menuItemUnselectedTextColor = "#2F5D80",
  menuItemUnselectedIconColor = "#2F5D80",
}: DrawerContentProps) {
  const width = drawerWidth || "60%";

  const renderDrawerContent = useCallback(
    (props: DrawerContentComponentProps) => (
      <DrawerContent
        drawerItems={drawerItems}
        BottomComponent={BottomComponent}
        TopComponent={TopComponent}
        showUserInfo={showUserInfo}
        userInfo={userInfo}
        userImageStyle={userImageStyle}
        userNameStyle={userNameStyle}
        userEmailStyle={userEmailStyle}
        menuItemContainerStyle={menuItemContainerStyle}
        menuItemContainerContentStyle={menuItemContainerContentStyle}
        menuItemStyle={menuItemStyle}
        menuTextStyle={menuTextStyle}
        iconStyle={iconStyle}
        menuItemSelectedBackgroundColor={menuItemSelectedBackgroundColor}
        menuItemSelectedTextColor={menuItemSelectedTextColor}
        menuItemSelectedIconColor={menuItemSelectedIconColor}
        menuItemUnselectedBackgroundColor={menuItemUnselectedBackgroundColor}
        menuItemUnselectedTextColor={menuItemUnselectedTextColor}
        menuItemUnselectedIconColor={menuItemUnselectedIconColor}
        {...props}
      />
    ),
    []
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: safeAreaBackgroundColor }}
      >
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: "transparent",
            drawerInactiveBackgroundColor: "transparent",
            drawerHideStatusBarOnOpen,
            overlayColor: "transparent",
            drawerStyle: {
              backgroundColor: "transparent",
              width: width as DimensionValue,
            },
            sceneStyle: {
              backgroundColor: drawerBackgroundColor,
            },
            drawerType: "front",
          }}
          drawerContent={renderDrawerContent}
        >
          {drawerItems.map((item) => (
            <Drawer.Screen
              key={item.name}
              name={item.name}
              options={{
                drawerLabel: item.drawerLabel,
                title: item.title,
              }}
            />
          ))}
        </Drawer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
