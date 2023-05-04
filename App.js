import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetails from "./src/screens/ProductDetails";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
