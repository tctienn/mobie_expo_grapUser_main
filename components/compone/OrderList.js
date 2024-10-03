import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function OrderList() {
    const navigation = useNavigation();

    const items = [
        { name: 'Sản phẩm 1', address: 'Địa chỉ 1' },
        { name: 'Sản phẩm 2', address: 'Địa chỉ 2' },
        { name: 'Sản phẩm 3', address: 'Địa chỉ 3' },
        { name: 'Sản phẩm 4', address: 'Địa chỉ 4' },
        { name: 'Sản phẩm 5', address: 'Địa chỉ 5' },
        // Bạn có thể thêm nhiều item ở đây
    ];

    return (
        <View style={styles.containerList}>
            <ScrollView style={styles.scrollView}>
                {items.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.item} onPress={() => { navigation.navigate('DetailOrderList') }}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemAddress}>{item.address} | km</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    containerList: {
        width: '100%',
        height: 400,
        backgroundColor: '#f0f0f0', // Màu nền cho thẻ View chính
        padding: 10,
    },
    scrollView: {
        flex: 1, // Đảm bảo ScrollView chiếm toàn bộ không gian còn lại
    },
    item: {
        width: '100%', // Chiều rộng gần bằng thẻ View chính
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff', // Màu nền cho từng item
        borderRadius: 5, // Bo góc cho từng item
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2, // Đổ bóng cho Android
    },
    itemName: {
        fontSize: 16, // Kích thước chữ cho tên
        fontWeight: 'bold', // Chữ đậm
    },
    itemAddress: {
        fontSize: 14, // Kích thước chữ cho địa chỉ
        color: '#555', // Màu chữ cho địa chỉ
    },


})