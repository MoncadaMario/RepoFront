import { Ionicons } from "@expo/vector-icons";
import { View, Text} from "react-native";
import styles from "@/styles/styles";

type ProductProps = {
    nombre: string;
    categoria: string;
    precio: number;
    cantidad: number;
};

export default function ProductCard({ nombre, categoria, precio, cantidad }: ProductProps) {
    return (
        <View style={styles.wrapper}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="cube-outline" size={28} color="#4A90E2" />
                    <Text style={styles.title}>{nombre}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="albums-outline" size={20} color="#666" />
                    <Text style={styles.text}>Categoria: {categoria}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="layers-outline" size={20} color="#666" />
                    <Text style={styles.text}>Cantidad: {precio}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="layers-outline" size={20} color="#666" />
                    <Text style={styles.text}>Cantidad: {cantidad}</Text>
                </View>
            </View>
        </View>
    );
}