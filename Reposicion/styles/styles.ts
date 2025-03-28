import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    wrapper: {
        height: "60%",
        alignItems: "center"
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    infoRows: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10,
    },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    table: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        padding: 10,
    },
    addButton: {
        backgroundColor: "#005f00",
        padding: 15,
        borderRadius: 10,
        width: "45%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    addProductButton: {
        backgroundColor: "#005f00",
        padding: 5,
        borderRadius: 10,
        alignItems: "center",
        margin: 10,
    },
    addProductButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    //container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f5f5f5" },
    //title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: { width: "100%", height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 15, marginBottom: 10, backgroundColor: "#fff" },
    //button: { backgroundColor: "#007bff", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginTop: 10 },
    buttonSave: { backgroundColor: "#28a745", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginTop: 10 },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default styles;