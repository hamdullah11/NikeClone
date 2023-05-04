import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import products from "../data/products";
import { Image } from "react-native";

const ProductDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    alert("cart");
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={{
                width,
                aspectRatio: 1,
              }}
            />
          )}
          horizontal
          pagingEnabled
        />
        <View
          style={{
            padding: 20,
          }}
        >
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={addToCart}
      >
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    // textAlign: "center",
  },
});
