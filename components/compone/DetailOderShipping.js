import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const InvoiceForm = () => {
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
                    {/* Bảng thông tin đầu tiên */}
                    <ScrollView style={styles.innerScroll}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Recipient Name</Text>
                            <Text style={styles.valueText}>John Doe</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Phone Number</Text>
                            <Text style={styles.valueText}>+84 123 456 789</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Account Name</Text>
                            <Text style={styles.valueText}>johndoe123</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Address</Text>
                            <Text style={styles.valueText}>123 Nguyen Trai, Hanoi</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Purchase Time</Text>
                            <Text style={styles.valueText}>2024-10-03 14:30</Text>
                        </View>

                        {/* Dòng giá trị nằm giữa, chữ lớn hơn */}
                        <View style={styles.centeredRow}>
                            <Text style={styles.largeText}>Total: $150.00</Text>
                        </View>

                        <Button title="Confirm Delivery" onPress={() => console.log("Form Submitted!")} color="#A855F7" />
                    </ScrollView>
                </View>

                <View style={styles.infoContainer}>
                    {/* Bảng thông tin thứ hai */}
                    <ScrollView style={styles.innerScroll}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Additional Info</Text>
                            <Text style={styles.valueText}>No additional info</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Delivery Note</Text>
                            <Text style={styles.valueText}>Leave at the front door</Text>
                        </View>

                        <Button title="Submit Additional Info" onPress={() => console.log("Additional Form Submitted!")} color="#A855F7" />
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Đảm bảo tiêu đề và nội dung cách nhau đều
        marginBottom: 15,
        paddingVertical: 5, // Padding dọc giữa các dòng
    },
    centeredRow: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
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
    largeText: {
        fontSize: 24, // Chữ lớn cho giá trị tổng
        fontWeight: 'bold',
        color: '#A855F7',
    },
});

export default InvoiceForm;
