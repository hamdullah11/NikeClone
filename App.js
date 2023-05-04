import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetails from "./src/screens/ProductDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetails />
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
