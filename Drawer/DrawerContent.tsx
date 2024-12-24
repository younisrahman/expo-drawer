import React, { useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigationState } from "@react-navigation/native";
import { IconRenderer } from "./IconRenderer";
import { DrawerContentProps } from "./type";

export const DrawerContent: React.FC<DrawerContentProps> = ({
  drawerItems,
  navigation,
  showUserInfo = true,
  userInfo,
  BottomComponent,
  TopComponent,
  userImageStyle,
  userNameStyle,
  userEmailStyle,
  menuItemContainerStyle,
  menuItemContainerContentStyle,
  menuItemStyle,
  menuTextStyle,
  iconStyle,
  menuItemSelectedBackgroundColor,
  menuItemSelectedTextColor,
  menuItemSelectedIconColor,
  menuItemUnselectedBackgroundColor,
  menuItemUnselectedTextColor,
  menuItemUnselectedIconColor,
}) => {
  const currentRoute = useNavigationState((state) => state.routes[state.index]);

  const width = Platform.OS === "ios" ? "95%" : "100%";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: "100%",
          width: width,
        }}
      >
        {TopComponent ? (
          <TopComponent />
        ) : (
          showUserInfo && (
            <View style={[styles.drawerHeader]}>
              <Image
                source={{
                  uri:
                    userInfo?.imageLink ||
                    "https://www.younisrahman.com/assets/useravatar.e3af9842.png",
                }}
                style={[styles.profileImage, userImageStyle]}
              />
              <Text style={[styles.userName, userNameStyle]}>
                {userInfo?.name || "John Doe"}
              </Text>
              <Text style={[styles.userEmail, userEmailStyle]}>
                {userInfo?.email || "johndoe@example.com"}
              </Text>
            </View>
          )
        )}
        <ScrollView
          contentContainerStyle={[
            {
              alignItems: "center",
            },
            menuItemContainerContentStyle,
          ]}
          style={menuItemContainerStyle}
        >
          {drawerItems.map((item) => {
            return (
              <Pressable
                key={item.name}
                style={[
                  styles.drawerButton,
                  {
                    backgroundColor:
                      currentRoute?.name === item?.name
                        ? menuItemSelectedBackgroundColor ||
                          "rgba(5, 5, 5, 0.2)"
                        : menuItemUnselectedBackgroundColor ||
                          "rgba(255, 255, 255, 0.2)",
                  },
                  menuItemStyle,
                ]}
                onPress={
                  item?.onPress
                    ? item.onPress
                    : () => navigation.navigate(item.name)
                }
              >
                <IconRenderer
                  menuItemSelectedIconColor={menuItemSelectedIconColor}
                  menuItemUnselectedIconColor={menuItemUnselectedIconColor}
                  iconStyle={iconStyle}
                  item={item}
                  side="left"
                  isSelected={currentRoute?.name === item?.name}
                />

                <Text
                  style={[
                    styles.drawerText,
                    {
                      color:
                        currentRoute?.name === item?.name
                          ? menuItemSelectedTextColor
                          : menuItemUnselectedTextColor,
                    },
                    menuTextStyle,
                  ]}
                >
                  {item.drawerLabel}
                </Text>
                <IconRenderer iconStyle={iconStyle} item={item} side="right" />
              </Pressable>
            );
          })}
        </ScrollView>
        {BottomComponent && <BottomComponent />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 45,
    marginBottom: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    color: "#fff",
    fontSize: 14,
    marginTop: 2,
  },
  drawerButton: {
    borderRadius: 10,
    marginVertical: 5,
    padding: 15,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  drawerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
