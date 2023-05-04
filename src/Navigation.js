import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";

const Stack = createNativeStackNavigator();
import { FontAwesome5 } from "@expo/vector-icons";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                }}
                onPress={() => navigation.navigate("Cart")}
              >
                <FontAwesome5 name="shopping-cart" color="gray" size={18} />
                <Text
                  style={{
                    fontWeight: "500",
                    marginLeft: 5,
                    color: "gray",
                  }}
                >
                  1
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
