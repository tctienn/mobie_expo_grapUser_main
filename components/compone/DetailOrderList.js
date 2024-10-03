import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

const OrderDetailForm = () => {
    const [region, setRegion] = useState({
        latitude: 21.028511,
        longitude: 105.8544441,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    const handleMapPress = (e) => {
        setRegion({
            ...region,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        });
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onPress={handleMapPress}
            >
                <Marker coordinate={region} />
            </MapView>

            <ScrollView horizontal={true} style={styles.scrollContainer}>
                <View style={styles.infoContainer}>
                    {/* Bảng thông tin đơn hàng */}
                    <ScrollView style={styles.innerScroll}>
                        <Text style={styles.header}>Order Details</Text>
                        <View style={styles.row}>
                            <Text style={styles.label}>Order ID</Text>
                            <Text style={styles.valueText}>#123456</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Recipient Name</Text>
                            <Text style={styles.valueText}>John Doe</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Phone Number</Text>
                            <Text style={styles.valueText}>+84 123 456 789</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Delivery Address</Text>
                            <Text style={styles.valueText}>123 Nguyen Trai, Hanoi</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Delivery Time</Text>
                            <Text style={styles.valueText}>2024-10-03 14:30</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Total Amount</Text>
                            <Text style={styles.valueText}>$150.00</Text>
                        </View>

                        <Button title="Accept Order" onPress={() => console.log("Order Accepted!")} color="#A855F7" />
                    </ScrollView>
                </View>

                <View style={styles.infoContainer}>
                    {/* Bảng thông tin bổ sung */}
                    <ScrollView style={styles.innerScroll}>
                        <Text style={styles.header}>Additional Information</Text>
                        <View style={styles.row}>
                            <Text style={styles.label}>Delivery Note</Text>
                            <Text style={styles.valueText}>Leave at the front door</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Special Instructions</Text>
                            <Text style={styles.valueText}>Ring the bell upon arrival</Text>
                        </View>

                        <Button title="View Delivery History" onPress={() => console.log("View History")} color="#A855F7" />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    map: {
        width: '100%',
        height: height * 0.5, // Chiếm 50% chiều cao màn hình
    },
    scrollContainer: {
        flexDirection: 'row', // Vuốt ngang giữa các bảng
    },
    infoContainer: {
        width: width * 0.9, // Đặt chiều rộng cho mỗi bảng
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 10, // Khoảng cách giữa các bảng
    },
    innerScroll: {
        maxHeight: height * 0.5, // Đảm bảo chiều cao tối đa cho bảng cuộn
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4B5563',
        marginBottom: 15,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Đảm bảo tiêu đề và nội dung cách nhau đều
        marginBottom: 10,
        paddingVertical: 5, // Padding dọc giữa các dòng
    },
    label: {
        width: '40%', // Cột chứa tiêu đề
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
    },
    valueText: {
        width: '60%', // Cột chứa nội dung
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
    },
});

export default OrderDetailForm;
