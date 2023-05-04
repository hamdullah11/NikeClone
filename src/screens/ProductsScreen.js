import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import products from "../data/products";

const ProductsScreen = () => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.Image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
