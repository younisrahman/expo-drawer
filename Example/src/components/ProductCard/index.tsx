import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Rating } from "react-native-ratings";
import { BodySmall } from "../../styles/typography";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductTypes, RootStackParamList } from "../../../types";
interface ProductCardProp {
  product: ProductTypes;
  style?: object;
}

const ProductCard: React.FC<ProductCardProp> = ({ product, style }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { product: product });
      }}
      activeOpacity={0.9}
      style={[styles.container, style]}
    >
      <Image style={styles.imageStyle} source={{ uri: product.image }} />
      <BodySmall>
        {"$"}
        {product.price}
      </BodySmall>
      <BodySmall style={{ marginTop: hp(0.5) }} numberOfLines={2}>
        {product.title}
      </BodySmall>
      <View style={{ marginTop: hp(0.5), flexDirection: "row" }}>
        <Rating
          showRating={false}
          ratingCount={5}
          imageSize={15}
          startingValue={product.rating.rate}
          readonly
        />
        <BodySmall style={{ marginLeft: wp(2) }}>
          {product.rating.rate}
        </BodySmall>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(35),
    width: wp(35),
  },
  imageStyle: {
    height: hp(25),
    width: wp(35),
    resizeMode: "contain",
  },
});
export default ProductCard;
