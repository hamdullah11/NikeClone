import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import products from "../data/products";

const ProductsScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Product Details")}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.Image}
            />
          </TouchableOpacity>
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
