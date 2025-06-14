import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { CartContext } from "../../contexts/CardContext";
import CardItem from "../../components/CardItem";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
  return (
    <View style={stlyes.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho....</Text>}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <Text style={stlyes.total}> Total R$ {total}</Text>
        )}
      />
    </View>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
