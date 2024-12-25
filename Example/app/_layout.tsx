import { AnimatedDrawer } from "expo-drawer";
import { store } from "@/src/store";
import { RootStackParamList } from "@/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { Provider } from "react-redux";

export default function Layout() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const drawerItems = [
    {
      name: "index",
      drawerLabel: "Home",
      title: "overview",
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
    <Provider store={store}>
      <AnimatedDrawer
        drawerWidth={"60%"}
        drawerItems={drawerItems}
        drawerBackgroundColor="#3498DB"
        safeAreaBackgroundColor="#3498DB"
        menuItemSelectedBackgroundColor="#2C3E50"
        menuItemSelectedTextColor="#FFFFFF"
        menuItemSelectedIconColor="#FFFFFF"
        menuItemUnselectedBackgroundColor="#D9EAF7"
        menuItemUnselectedTextColor="#2F5D80"
        menuItemUnselectedIconColor="#2F5D80"
        userEmailStyle={{ color: "#1a3950" }}
        userNameStyle={{ color: "#1a3950" }}
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
    </Provider>
  );
}
