import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";

import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectAllTotal,
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from "../store/CartSlice";

const ShoppingCartTotal = () => {
  const subtotal = useSelector(selectSubTotal);
  const deliveryPrice = useSelector(selectDeliveryPrice);
  const totalPrice = useSelector(selectTotal);
  return (
    <ScrollView style={styles.totalContainer}>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,
            color: "lightgray",
          }}
        >
          Subtotal
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "lightgray",
          }}
        >
          {subtotal} US$
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,
            color: "lightgray",
          }}
        >
          Delivery
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "lightgray",
          }}
        >
          {deliveryPrice} US$
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,

            fontWeight: "500",
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {totalPrice} US$
        </Text>
      </View>
    </ScrollView>
  );
};
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
      }}
    >
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotal}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        // onPress={addToCart}
      >
        <Text style={styles.btnText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "lightgray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  button: {
    position: "absolute",
    backgroundColor: "lightgray",
    opacity: 0.9,
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    // textAlign: "center",
  },
});
