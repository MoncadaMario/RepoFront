import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/styles/styles";

export default function AddProductScreen() {
  const router = useRouter();

  const [products, setProducts] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (field: string, value: string) => {
    setProducts((prev) => ({ ...prev, [field]: value }));
  };

  const saveProduct = () => {
    const { name, category, price, quantity} = products;
    if (!name || !category || !price || !quantity) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    console.log("Producto guardado:", products);
    Alert.alert("Éxito", "El producto se ha registrado correctamente.");
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Inventario</Text>

      <TextInput style={styles.input} placeholder="Nombre del producto" value={products.name} onChangeText={(text) => handleChange("name", text)} />
      <TextInput style={styles.input} placeholder="Categoría" value={products.category} onChangeText={(text) => handleChange("category", text)} />
      <TextInput style={styles.input} placeholder="Precio" value={products.price} onChangeText={(text) => handleChange("price", text)} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Cantidad" value={products.quantity} onChangeText={(text) => handleChange("quantity", text)} keyboardType="numeric" />
      <TouchableOpacity style={styles.buttonSave} onPress={saveProduct}>
        <Text style={styles.buttonText}>Guardar Producto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


