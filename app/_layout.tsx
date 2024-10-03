import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './tab/index'
import Tab from './tab/tab'
import TabDEMO from './(tabs)/_layout'

import OrderList from '@/components/compone/OrderList'
import DetailOrderList from '@/components/compone/DetailOrderList'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

{/* /// cấu hình draw/// */ }
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Trang chủ',
          // headerShown: false,
          title: '    ',
          headerStyle: {
            backgroundColor: 'rgb(235, 203, 227)'
          }
        }}
        component={Tab}
      />





      <Drawer.Screen
        name="homemain"
        options={{
          drawerLabel: 'Home demo',
          title: 'Overview',
        }}
        component={TabDEMO}
      />

    </Drawer.Navigator>
  );
}
{/* /// cấu hình router/// */ }
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{ headerShown: false, title: 'Trang Chủ' }}
      />
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{ headerShown: true, title: 'Đơn đang chờ' }}
      />
      <Stack.Screen
        name="DetailOrderList"
        component={DetailOrderList}
        options={{ headerShown: true, title: 'Chi chi tiết đơn chờ' }}
      />

      {/* Thêm các màn hình khác vào đây nếu cần */}
    </Stack.Navigator>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
