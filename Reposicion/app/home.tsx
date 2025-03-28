import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import axios from "axios"
import { Product, setProducts } from "@/store/slices/productsSlice";


export default function Home(){
    const router = useRouter();
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.products)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5277/api/Productos");
                console.log("Datos recibidos:", response.data);
                dispatch(setProducts(response.data));
            } catch (err: any) {
                console.error("Error al obtener productos: ", err.message);
            }
        };
        fetchProducts();
    }, [dispatch]);

    const renderItem = ({ item } : {item: Product}) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Nombre: {item.nombre}</Text>
            <Text style={styles.itemText}>Categoría: {item.categoria}</Text>
            <Text style={styles.itemText}>Precio: {item.precio}</Text>
            <Text style={styles.itemText}>Cantidad: {item.cantidad}</Text>
            
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={{ color: "#fff" }}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
                <Text style={{ color: "#fff" }}>Borrar</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

    return (
        <ImageBackground source={require("../assets/images/repofondo.jpg")} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
            <Text style={styles.text}>Productos</Text>
            </View>

            <TouchableOpacity style={styles.addProductButton} onPress={() => router.push("/addProduct")}>
            <Text style={styles.addProductButtonText}>Agregar Producto</Text>
            </TouchableOpacity>

{product.length === 0 ? (
    <Text>No hay ningún producto agregado</Text>
) : (
    <View style={styles.table}>
        <View style={styles.headerRow}>
            <Text style={styles.headerCell}>ID</Text>
            <Text style={styles.headerCell}>Nombre</Text>
            <Text style={styles.headerCell}>Categoría</Text>
            <Text style={styles.headerCell}>Precio</Text>
            <Text style={styles.headerCell}>Cantidad</Text>
        </View>
        <FlatList
            data={product}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    </View>
)}</ImageBackground>
    );
}