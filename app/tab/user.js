import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const AccountInfo = () => {
    const user = {
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phoneNumber: '0123456789',
        address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
    };
    const handleLogout = () => {
        // Logic đăng xuất (có thể thêm logic thực tế ở đây)
        Alert.alert('Thông báo', 'Đăng xuất thành công!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thông Tin Tài Khoản</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Họ và Tên:</Text>
                <Text style={styles.value}>{user.fullName}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{user.email}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Số điện thoại:</Text>
                <Text style={styles.value}>{user.phoneNumber}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Địa chỉ:</Text>
                <Text style={styles.value}>{user.address}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Đăng Xuất</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AccountInfo;
