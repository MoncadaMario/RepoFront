import React, { useState } from "react";
import axios from "axios";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import styles from "@/styles/styles";

const AddProduct = () => {
    const [productData, setProductData] = useState({
        id: '',
        name: '',
        category: '',
        price: '',
        quantity: ''
    });

    const handleChange = (name: string, value: string) => {
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5277/api/Productos", productData);
            Alert.alert("Producto agregado", `ID: ${response.data.id}`);
            setProductData({
                id: '',
                name: '',
                category: '',
                price: '',
                quantity: ''
            });
        } catch (error) {
            console.error("Error al agregar el producto:", error);
            Alert.alert("Error", "No se pudo agregar el producto. Inténtalo de nuevo.");
        }
    };

    return (
        
        <View style={styles.container}>
            <TextInput
                placeholder="ID"
                value={productData.id}
                onChangeText={(value) => handleChange('id', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Nombre"
                value={productData.name}
                onChangeText={(value) => handleChange('name', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Categoría"
                value={productData.category}
                onChangeText={(value) => handleChange('category', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Precio"
                value={productData.price}
                onChangeText={(value) => handleChange('price', value)}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Cantidad"
                value={productData.quantity}
                onChangeText={(value) => handleChange('quantity', value)}
                style={styles.input}
                keyboardType="numeric"
            />
            <Button title="Agregar Producto" onPress={handleSubmit} />
        </View>
    );
};

export default AddProduct;