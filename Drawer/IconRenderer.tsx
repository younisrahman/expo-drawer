import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import { StyleProp, ViewStyle } from "react-native";
import { DrawerItem } from "./type";

const Icons = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export const IconRenderer = ({
  iconStyle,
  item,
  side = "left",
  menuItemSelectedIconColor,
  menuItemUnselectedIconColor,
  isSelected,
}: {
  iconStyle?: StyleProp<ViewStyle>;
  item: Partial<DrawerItem>;
  side?: "left" | "right";
  menuItemSelectedIconColor?: string;
  menuItemUnselectedIconColor?: string;
  isSelected?: boolean;
}) => {
  const iconName = side === "left" ? item.leftIcon : item.rightIcon;
  const IconComponent =
    //@ts-ignore
    Icons[side === "left" ? item?.leftIconFamily : item?.rightIconFamily] ||
    FontAwesome;
  const iconSize = side === "left" ? item.leftIconSize : item.rightIconSize;
  const iconColor = side === "left" ? item.leftIconColor : item.rightIconColor;

  return (
    <IconComponent
      name={iconName}
      size={iconSize || 20}
      color={
        isSelected
          ? menuItemSelectedIconColor
          : menuItemUnselectedIconColor || iconColor || "black"
      }
      style={iconStyle}
    />
  );
};
